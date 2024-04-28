"use server";
import { connectToDB } from "./utils";
import { User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

//****************************************************USER ACTIONS****************************************************

export const createNewUser = async (newUserInfo) => {

  try {
    await connectToDB();
    const newUser = new User(newUserInfo);
    await newUser.save();
    console.log("oluşturuldu");
    return newUser;
  } catch (err) {
    console.log(err);
  }
};

export const findUser = async (value) => {
  await connectToDB();

  try {
    const user = await User.findOne({ username: value });
    return user;
  } catch (err) {
    throw new Error("Kullanıcı bulunamadı");
  }
};

//****************************************************ITEM ACTIONS****************************************************

export const addTodo = async (formData) => {
  const authUser = await currentUser();
  const { title, deadline, tag, category, description } =
    Object.fromEntries(formData);

  const addedFields = {
    title,
    deadline,
    tag,
    category,
    description,
  };

  try {
    await connectToDB();
    const user = await findUser(authUser.emailAddresses[0].emailAddress);
    const newTodos = [addedFields, ...user.todos];
    await User.findOneAndUpdate(
      { username: user.username },
      { todos: newTodos },
      {
        new: true,
      }
    );
  } catch (err) {
    console.log(err);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const updateTodo = async (formData) => {
  const authUser = await currentUser();
  const { title, deadline, tag, category, description, id } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const user = await findUser(authUser.emailAddresses[0].emailAddress);
    let newTodos = user.todos.filter((todo) => todo.id !== id);
    const updateFields = {
      title,
      deadline,
      tag,
      category,
      description,
    };

    newTodos = [updateFields, ...newTodos];

    await User.findOneAndUpdate(
      { username: user.username },
      { todos: newTodos },
      {
        new: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const deleteTodo = async (formData) => {
  const authUser = await currentUser();
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const user = await findUser(authUser.emailAddresses[0].emailAddress);
    const newTodos = user.todos.filter((todo) => todo.id !== id);

    await User.findOneAndUpdate(
      { username: user.username },
      { todos: newTodos },
      {
        new: true,
      }
    );
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard");
};

//****************************************************TAG ACTIONS****************************************************

export const addTag = async (formData) => {
  const authUser = await currentUser();
  const { tagInput } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const user = await findUser(authUser.emailAddresses[0].emailAddress);
    const isTagExist = user.tags.find((tag) => tag === tagInput);
    let newTags = [];

    if (!isTagExist) newTags = [tagInput, ...user.tags];

    await User.findOneAndUpdate(
      { username: user.username },
      { tags: newTags },
      {
        new: true,
      }
    );  
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
};

export const deleteTag = async (formData) => {
  const authUser = await currentUser();
  const { deletedTag } = Object.fromEntries(formData);
  try {
    await connectToDB();
    const user = await findUser(authUser.emailAddresses[0].emailAddress);
    const newTags = user.tags.filter((tag) => tag.trim() !== deletedTag);

    await User.findOneAndUpdate(
      { username: user.username },
      { tags: newTags },
      {
        new: true,
      }
    );
  } catch (error) {}
  revalidatePath("/dashboard");
};
