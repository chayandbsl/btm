import bcrypt from "bcrypt";

export async function hashPassword(password) {
  return await bcrypt.hash(password, 12); // Increased from 10 to 12 for better security
}

export async function comparePassword(password, userPassword) {
  try {
    return await bcrypt.compare(password, userPassword);
  } catch (error) {
    console.error("Password comparison failed:", error);
    return false;
  }
}
