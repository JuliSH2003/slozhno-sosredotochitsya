let buttons = document.querySelectorAll('.header__theme-menu-button');

let theme = localStorage.getItem('theme');

if(!theme) {
  theme = 'theme-day'; // или 'theme-neon'
  localStorage.setItem('theme', theme);
}

document.body.classList.add(theme);

// Получаем тему из localStorage


buttons.forEach(button => {
  button.addEventListener('click', function () {
    document.body.classList.remove('theme-day', 'theme-neon', 'theme-auto');

    // Добавляем новую тему и сохраняем ее в localStorage
    if (this.classList.contains('header__theme-menu-button_type_light')) {
      document.body.classList.add('theme-day');
      localStorage.setItem('theme', 'theme-day');
    } else if (this.classList.contains('header__theme-menu-button_type_dark')) {
      document.body.classList.add('theme-neon');
      localStorage.setItem('theme', 'theme-neon');
    } 

    buttons.forEach(button => {
      button.classList.remove('header__theme-menu-button_active');
    });
    this.classList.add('header__theme-menu-button_active');
  });
});