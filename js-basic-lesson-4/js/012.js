'use strict';

/*1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true. */

//es5

// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }

// Post.prototype.edit = function (text) {
//     this.text = text;
// };

// const post1 = new Post ('lolo', Post.prototype.edit , new Date);
// post1.edit(prompt('Введите текст', ''));

// console.log(post1);

// function AttachedPost(author, text, date) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;

// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
// };

// const attached1 = new AttachedPost ('werwer', Post.prototype.edit , new Date);
// attached1.edit(prompt('Введите текст', ''));
// attached1.makeTextHighlighted();
// console.log(attached1);


//es6 

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}
const post1 = new Post('lolo', Post.prototype.edit, new Date);
post1.edit(prompt('Введите текст', ''));

console.log(post1);

class AttachedPost extends Post{
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('werwer', Post.prototype.edit, new Date);
attached1.edit(prompt('Введите текст', ''));
attached1.makeTextHighlighted();
console.log(attached1);