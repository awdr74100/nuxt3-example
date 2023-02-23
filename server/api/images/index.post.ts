export default defineEventHandler(async (event) => {
  try {
    const data = await readMultipartFormData(event);

    if (!data) throw new Error();

    const imgur = useImgurClient();

    const links = await imgur.upload(data);

    return { success: true, message: '上傳成功', links };
  } catch (error) {
    // @ts-ignore
    console.log(error.response.statusCode);

    return { success: false };
  }
});
