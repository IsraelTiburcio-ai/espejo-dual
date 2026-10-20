import assert from 'node:assert/strict';
import {models,challenges,dualOf,answer,newSession} from './data.js';
for(const ch of challenges){const p=ch.primal,d=ch.solution;assert.equal(d.sense,p.sense==='max'?'min':'max');assert.deepEqual(d.c,p.b);assert.deepEqual(d.b,p.c);assert.equal(d.sign,'≥0');assert.equal(d.rel,p.sense==='max'?'≥':'≤');assert.equal(d.A.length,p.c.length);d.A.forEach((r,j)=>r.forEach((v,i)=>assert.equal(v,p.A[i][j])));assert.deepEqual(dualOf(d),p);ch.holes.forEach(k=>assert(!answer(ch,k).includes('undefined')));}
assert.deepEqual(dualOf(models[2]),{sense:'min',A:[[8,5],[2,2],[5,4]],b:[4,1,1],c:[16,20],rel:'≥',sign:'≥0'});
assert.throws(()=>dualOf({...models[0],rel:'='}));
const draws=new Set();for(let i=0;i<100;i++){const s=newSession();assert.equal(s.length,5);assert.deepEqual(s.map(c=>c.stage),[0,1,2,3,4]);draws.add(s.map(c=>c.id).join(','));}assert(draws.size>1);
console.log(`QA académico: ${challenges.length} retos válidos; transposición, vectores, signos, dimensiones y doble dual verificados. Ejemplo PDF p. 5 coincide. 100 sorteos: ${draws.size} secuencias.`);
