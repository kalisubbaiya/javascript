class Trainee{
    constructor(name, mobile, dob, degree, skills){
        this.name = name;
        this.mobile = mobile;
        this.dob = dob;
        this.degree = degree;
        this.skills = skills;
    }
    get getName(){
       console.log("My name is ", this.name);
    }
    set setData(details){
        return this.skills.push(details);
    }
}


var trainee1 = new Trainee("Kaliraj", "xxxxxxxx20", "04-05-1996", "B.E", ["HTML5", "CSS3", "JAVASCRIPT", "REACT JS"], 4);
var trainee2 = new Trainee("Esakkiraj", "xxxxxxxx47", "27-10-2000", "B.E", ["HTML5", "CSS3", "JAVASCRIPT", "REACT JS"], 4);
var trainee3 = new Trainee("Siva", "xxxxxxxx56", "10-06-2003", "B.Sc", ["HTML5", "CSS3", "JAVASCRIPT", "REACT JS"]);

trainee1.getName;
trainee1.setData = "BOOTSTRAP";
trainee2.setData = "BOOTSTRAP";
trainee3.setData = "BOOTSTRAP";
console.log(trainee1, trainee2, trainee3);