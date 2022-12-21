module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'store_name',
        message: 'Имя редьюсера',
      },
    ]

    return inquirer.prompt(questions).then(answers => {
      const {store_name} = answers;
      const path = `${store_name}`;
      const absPath = `src/store/${path}`;
      const store_name_upper = store_name.toUpperCase();
      const store_name_upperFirst = store_name.charAt(0).toUpperCase() + store_name.slice(1);
      return {...answers, path, absPath, store_name_upper, store_name_upperFirst};
    });
  }
}
