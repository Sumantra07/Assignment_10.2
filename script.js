/*
 *
 * Program to use ES6 setters and getter functionalities
 * 
 * 
 */

// Airplane class created
class Airplane
{    // checking the validity of name
     setName(name){
		 if(!((name === null) || (name === '') || (name === undefined)))
		 {
			this.name = name;
		 }
		 else{
			console.log("capacity is invalid");
		 }
     
	 }
	 getName(){
     return this.name;
	 }
	  // checking the validity of capacity
	 setCapacity(capacity){
		if(!((capacity === null) || (capacity === '') || (capacity === undefined) || (capacity < 0)))
		{
		  if(!(capacity > 180))
		  {
			this.capacity = capacity;
		  }
		 
		  else {
			console.log("capacity cant be more than 180");
		  }
		}
		  else {
			console.log("capacity is invalid");
		  }
		}
	 getCapacity(){
	return this.capacity;	
	 }
	  // checking the validity of speed
	setSpeed(speed){
		if(!((speed === null) || (speed === '') || (speed === undefined) || (speed < 0)))
		{
		  if(!(speed > 900))
		  {
			this.speed = speed;
		  }
		 
		  else {
			console.log("speed cant be more than 900");
		  }
		}
		  else {
			console.log("speed is invalid");
		  }
		}	
	 
	getSpeed(){
	return this.speed;	
	 } 	 							
	// method to calculate area
	printStatus()
	{
		console.log("Airplane: " + this.name + " with " + this.capacity + " capacity, is moving at " + this.speed);
	}
	increaseSpeed(difference)
	{
		var permissible_speed = this.speed + difference;
		if(permissible_speed <= 900)
		{
			this.speed = this.speed + difference;
		}
		
		else{
			console.log("speed cant be more than 900, operation denied for " , this.name);
		}

	}
	decreaseSpeed(difference)
	{
		this.speed = this.speed - difference;
	}
}
// creating objects of the class
var aero1 = new Airplane();
var aero2 = new Airplane();
var aero3 = new Airplane();
// assigning values to first object
aero1.setName("Boeing 747");
aero1.setCapacity(180);
aero1.setSpeed(600);
// assigning values to second object
aero2.setName("Boeing 777");
aero2.setCapacity(180);
aero2.setSpeed(750);
// assigning values to third object
aero3.setName("Airbus A380");
aero3.setCapacity(180);
aero3.setSpeed(650);
// print status
aero1.printStatus();
aero2.printStatus();
aero3.printStatus();
console.log ("=================increasing speed===================");
// increasing speed by 200
aero1.increaseSpeed(200);
aero2.increaseSpeed(200);
aero3.increaseSpeed(200);
// print status
aero1.printStatus();
aero2.printStatus();
aero3.printStatus();

