function Student(age, nam) {
    this.age = age
    this.nam = nam
}
Student.prototype.getInfo = function() {
    return this.nam + '-' + this.age
}
window.onload = function() {
    var student1 = new Student(21, '小明')
    document.write(student1.getInfo() + '<br>')
    var student2 = new Student(19, '小红')
    document.write(student2.getInfo())
}