document.querySelector('button')!.addEventListener('click', () => {
  const newTodo = document.querySelector('input')!.value;
  window['add'].sendAddTodo(newTodo);
});
