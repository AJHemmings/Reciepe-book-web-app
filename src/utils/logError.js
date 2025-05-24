import supabase from "./supabase";

export async function logError(context, message, data = {}) {
  await supabase.from("error_logs").insert([
    {
      context,
      message,
      data,
    },
  ]);
}
