Person = (name, height, age, sleeping) ->
  @name = name
  @height = height
  @age = age
  @sleeping = false
  return

Person::eat = ->
  noise = "chomp"
  return noise
  console.log "eating noise: " + noise
  return

Person::sleep = ->
  if @sleeping is false
    return @sleeping = true
    console.log "status: " + @sleeping
  else
    console.log @name + " is already sleeping."
  return

Person::wakeUp = ->
  if @sleeping is true
    @sleeping = false
  else
    console.log @name + " is already awake."
  return

Student = (name, height, age, sleeping, studying) ->
  @studying = false
  return

Student:: = Object.create(Person::)
Student::constructor = Student
Student:: = new Person()
Student::constructor = Student
Student::study = ->
  if @studying is false
    @studying = true
    console.log "status: " + @studying
  else
    console.log @name + " is studying already."
  return

Student::stopStudy = ->
  @studying = false
  console.log "status: " + @studying
  return

Student::sleep = ->
  if @studying is false
    @sleeping = true
    console.log @student + " has just fallen asleep."
  else
    @sleeping = false
    console.log @student + " is studying, can't sleep yet!"
  return

Dustin = new Person("Dustin", "5ft8in", 25, false)
Randall = new Student("Randall", "n/a", 25, false, false)