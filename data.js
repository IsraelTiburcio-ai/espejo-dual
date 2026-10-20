// Fuente principal: GYM 4, pp. 4–8. Alcance: las dos formas canónicas no negativas.
export function dualOf(p) {
  if (!['max','min'].includes(p.sense) || p.sign !== '≥0' || p.rel !== (p.sense === 'max' ? '≤' : '≥')) throw Error('Modelo fuera del alcance canónico');
  if (!p.A.length || p.A.length !== p.b.length || p.A.some(r => r.length !== p.c.length) || ![...p.A.flat(),...p.b,...p.c].every(Number.isFinite)) throw Error('Dimensiones o coeficientes inválidos');
  return {sense:p.sense === 'max'?'min':'max', A:p.c.map((_,j)=>p.A.map(r=>r[j])), b:[...p.c], c:[...p.b], rel:p.sense === 'max'?'≥':'≤', sign:'≥0'};
}
const model=(sense,A,b,c)=>({sense,A,b,c,rel:sense==='max'?'≤':'≥',sign:'≥0'});
export const models=[
  model('max',[[1,1],[2,1]],[4,5],[3,2]),
  model('min',[[2,1],[1,3]],[6,9],[4,5]),
  model('max',[[8,2,5],[5,2,4]],[16,20],[4,1,1]), // PDF p. 5
  model('max',[[2,3],[1,4]],[8,12],[5,7]),
  model('min',[[3,1],[2,4]],[7,10],[6,8]),
  model('max',[[1,2],[3,1],[2,4]],[6,9,12],[4,7]),
  model('min',[[1,2,3],[4,1,2]],[8,10],[5,6,9]),
  model('max',[[4,1],[2,3]],[10,15],[6,5]),
  model('min',[[2,5],[3,1]],[10,8],[3,2])
];
export const stages=[
  {title:'Invierte la dirección',label:'01 / EL SENTIDO',feedback:'Correcto: MAX y MIN se intercambian en estas formas canónicas.'},
  {title:'Cambia la estructura',label:'02 / LAS DIMENSIONES',feedback:'Correcto: cada restricción primal crea una variable dual y viceversa.'},
  {title:'Refleja los recursos',label:'03 / LOS VECTORES',feedback:'Correcto: b pasa al objetivo dual y c al lado derecho de sus restricciones.'},
  {title:'Gira los coeficientes',label:'04 / LA TRANSPUESTA',feedback:'Correcto: las columnas del primal son las filas del dual.'},
  {title:'Completa el espejo',label:'05 / EL MODELO DUAL',feedback:'Correcto: objetivo, matriz, recursos y signos forman el modelo dual.'}
];
// Tres variantes por habilidad: 15 retos estructurados y comprobables.
export const challenges=stages.flatMap((s,stage)=>[0,1,2].map(variant=>{
  const p=models[stage===1?[2,5,6][variant]:stage===4?[0,3,4][variant]:(stage+variant*3)%models.length];
  const d=dualOf(p);
  const holes=stage===0?['sense','rel0']:stage===1?['nv','nr']:stage===2?['c0','c1','b0']:stage===3?['a0_0','a0_1','a1_0']:['sense','c0','c1','a0_1','a1_0','rel0','b1','sign'];
  return {id:`${stage+1}-${variant+1}`,stage,primal:p,solution:d,holes};
}));
export const sub=n=>String(n).replace(/\d/g,d=>'₀₁₂₃₄₅₆₇₈₉'[d]);
export function answer(ch,key){const d=ch.solution;if(key==='nv')return String(d.c.length);if(key==='nr')return String(d.b.length);if(key==='sense')return d.sense;if(key==='sign')return '≥';if(key.startsWith('rel'))return d.rel;if(key[0]==='c')return `${d.c[+key.slice(1)]}y${sub(+key.slice(1)+1)}`;if(key[0]==='b')return String(d.b[+key.slice(1)]);const [i,j]=key.slice(1).split('_').map(Number);return String(d.A[i][j]);}
export function shuffled(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function newSession(){return stages.map((_,s)=>shuffled(challenges.filter(c=>c.stage===s))[0]);}
