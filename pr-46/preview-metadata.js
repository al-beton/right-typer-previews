// Convenience namespacing, not a security boundary.
const prefix='right-typer-preview-46:';
const proto=Storage.prototype;
const get=proto.getItem,set=proto.setItem,remove=proto.removeItem,key=proto.key;
proto.getItem=function(k){return get.call(this,this===localStorage?prefix+k:k)};
proto.setItem=function(k,v){return set.call(this,this===localStorage?prefix+k:k,v)};
proto.removeItem=function(k){return remove.call(this,this===localStorage?prefix+k:k)};
const clear=proto.clear;
proto.clear=function(){if(this!==localStorage)return clear.call(this);
const keys=[];for(let i=0;i<this.length;i++){const k=key.call(this,i);if(k?.startsWith(prefix))keys.push(k)}
for(const k of keys)remove.call(this,k)};
addEventListener('DOMContentLoaded',()=>{
const label=document.getElementById('build-version')||document.createElement('span');
label.id='build-version';label.setAttribute('aria-label','App version');
label.style.cssText='font-size:12px;color:inherit;white-space:nowrap';
const pr=document.createElement('a');pr.href='https://github.com/al-beton/right-typer/pull/46';
pr.textContent='Review PR #46';pr.style.color='inherit';
const commit=document.createElement('a');commit.href='https://github.com/al-beton/right-typer/commit/be699832cbb33b89565e714e505e2695388f1617';
commit.textContent='be69983';commit.title='be699832cbb33b89565e714e505e2695388f1617';commit.style.color='inherit';
label.replaceChildren(pr,' · ',commit);
const footer=document.querySelector('footer');
if(footer){footer.style.flexWrap='wrap';footer.append(label)}
else{const footer=document.createElement('footer');footer.append(label);document.body.append(footer)}
});