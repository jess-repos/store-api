module.exports = async (operation) => {
  try {
    const data = await operation();
    return [data, null];
  } catch (error) {
    return [null, error.message];
  }
};
