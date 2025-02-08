export default async function GoogleCallbackPage({
  searchParams,
}) {
  console.log("hit1");
  const { code } = searchParams;
  if (!code) {
    throw new Error("Missing authorization code.");
  }

  // await googleCallback(code);

  return null;
}
