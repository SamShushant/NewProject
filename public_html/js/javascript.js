/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function process_show_major_o_minor(num1,num2){
    
    if(num1 > num2){
        document.writeln("Mayor:"+num1);
        document.write("Minor:"+num2);
        
    }else if(num1 < num2){
        document.writeln("Minor:"+num1);
        document.write("Major:"+num2);
    }else{
        res = document.write("Same");
    }
   
}