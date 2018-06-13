/*
##Exercice 1 Créer une variable et l'initialiser à 0.
Tant que cette variable n'atteint pas 10, il faut :

    l'afficher
    l'incrementer
*/
for (var i =0 ;i < 10; i++) 
{
	 alert(i+" ");
}
/*
##Exercice 2 Créer deux variables. Initialiser la première à 0 et la deuxième avec un nombre compris en 1 et 100.
Tant que la première variable n'est pas supérieur à 20 :

    multiplier la première variable avec la deuxième
    afficher le résultat
    incrementer la première variable
*/
var x = 0 ;
var y = 2 ;
while ( x < 20) 
{
z = x*y;
alert(x+" * "+y+" = "+z); 
x = x + 1 ;
}
/*
##Exercice 3 Créer deux variables. Initialiser la première à 100 et la deuxième avec un nombre compris en 1 et 100.
Tant que la première variable n'est pas inférieur ou égale à 10 :

    multiplier la première variable avec la deuxième
    afficher le résultat
    décrémenter la première varia
*/
var array = [];
var x = 100 ;
var y = 2 ;
var r =0 ;
while ( x >= 10) 
{
z = x*y;
x = x - 1;
array.splice(r, 0,z);
r = r + 1;
}
alert(array);
/*
##Exercice 4 Créer une variable et l'initialiser à 1.
Tant que cette variable n'atteint pas 10, il faut :

    l'afficher
    l'incrementer de la moitié de sa valeur
*/

var x = 1;
while ( x < 10) 
{
alert(x);
x = x + 0.5;
}
/*
##Exercice 5 En allant de 1 à 15 avec un pas de 1, afficher le message On y arrive presque.
*/
for (i=1; i <=15 ; i++)
{ 
alert ("On y arrive presque ");
}
//##Exercice 6 En allant de 20 à 0 avec un pas de 1, afficher le message C'est presque bon.
for (i=20; i >=0 ; i--)
{ 
alert("C'est presque bon ")  ;
}

//##Exercice 7 En allant de 1 à 100 avec un pas de 15, afficher le message On tient le bon bout.
for (i=1; i <=100 ; i=i+15)
{ 
alert("On tient le bon bout ")  ;
}

//##Exercice 8 En allant de 200 à 0 avec un pas de 12, afficher le message Enfin !!!!.
for (i=200; i >=0 ; i=i-12)
{ 
alert("Enfin !!!! ") ;
}