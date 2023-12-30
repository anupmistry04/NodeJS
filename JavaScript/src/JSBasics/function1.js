function fn(u,v){
    return u,v
}
var fn=function(v,u){ return v+u};
var fn=(v,u)=>{ return u+v};
var fn=(v,u)=> v+u ;


var fn1=v=>{ return v };
var fn1=v=>v;


var fn2=v=>console.log(v)


var fn3=number=>number>=0; (return if number greater than equal to 0)


aarow fn with no input parameter: 
var fn4=function(){return Math.random}; 
var fn4=()=>Math.random;


anonymous function, callback fn, arrow fn:
fn5(10,function(){ 
return a});
fn5(10,()=>return a)



