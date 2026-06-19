const light = document.querySelector(`.light`);
const dark = document.querySelector(`.dark`);
const box = document.querySelector(`.box`);

light.addEventListener(`click`, (() => {
    box.id = `light`;
}));

dark.addEventListener(`click`, (() => {
    box.id = `dark`;
}))

