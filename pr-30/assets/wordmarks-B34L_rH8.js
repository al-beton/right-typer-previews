import{r as e}from"./style-DEjqXYj6.js";var t=[`left-little`,`left-ring`,`left-middle`,`left-index`,`right-index`,`right-middle`,`right-ring`,`right-little`],n=[[`01`,`Sequential`,`seq`,`Keyboard palette, left to right; repeats after eight letters. A thin ink outline keeps the pastel letters readable.`],[`02`,`Space between`,`space`,`The same sequence in monospace, with both thumb colours marking the word gap.`],[`03`,`Quiet underline`,`ink`,`Plain ink lettering with a small palette underline per letter. Both thumb colours sit beneath the space.`],[`04`,`Keys to letters`,`mapped`,`Actual Standard QWERTY finger mapping for each letter. A comparison, not the sequential palette or your selected keyboard profile.`]];function r(n,r){let i=0;return`<span class="wordmark wm-${r}" role="img" aria-label="${n}"><span aria-hidden="true">${[...n].map(n=>n===` `?`<span class="wm-gap"> </span>`:`<span class="wm-letter" style="--wm-colour:var(--${r===`mapped`?e[n.toLowerCase()]:t[i++%t.length]})">${n}</span>`).join(``)}</span></span>`}function i(){let e=document.querySelector(`#app`),i=new URLSearchParams(location.search),a=i.get(`name`)===`bright`?`Bright Typer`:`Right Typer`;e.innerHTML=`
    <header class="topbar"><h1>Wordmark studies</h1><a href="./">Back to app</a></header>
    <main class="wm-review">
      <div class="wm-intro"><p class="eyebrow">ALO-259 · DESIGN REVIEW</p>
      <h2>One name. Four small variations.</h2>
      <p>Compare at 22px, the app’s header size, and enlarged. No design is selected yet.</p></div>
      <label class="wm-switch">Display text <select id="wm-name"><option>Right Typer</option><option>Bright Typer</option></select></label>
      <p class="wm-note">Text changes only these examples. The project remains Right Typer.</p>
      <div class="wm-grid"></div>
      <section class="wm-palette" aria-labelledby="palette-title"><h2 id="palette-title">From the keyboard</h2>
        <div class="wm-swatches">${[...t.slice(0,4),`left-thumb`,`right-thumb`,...t.slice(4)].map(e=>`<span><i style="background:var(--${e})"></i>${e.replace(`-`,` `)}</span>`).join(``)}</div>
        <p>The requested red / orange / yellow / green / lilac / blue / purple / pink order follows the eight fingers. Current tokens render rose at “red” and cyan at “lilac”; these examples preserve the actual keyboard colours.</p>
        <p>Pastel fills alone have low contrast on the app’s #fafafa background. Options 01, 02 and 04 use an ink outline; 03 keeps the text in ink and the colours as decoration.</p>
      </section>
      <footer><span>Review only · Editable CSS typography</span><span id="build-version" aria-label="App version">Build · <a href="https://github.com/al-beton/right-typer/commit/c19707d10ca4cbfaf017c70381ff77c4056c8b24">c19707d</a></span></footer>
    </main>`;let o=e.querySelector(`#wm-name`),s=()=>{o.value=a,e.querySelector(`.wm-grid`).innerHTML=n.map(([e,t,n,i])=>`
      <article class="wm-card"><div class="wm-card-title"><span>${e}</span><h2>${t}</h2></div>
      <div class="wm-large">${r(a,n)}</div>
      <div class="wm-header"><span class="wm-size">22px / header</span>${r(a,n)}</div>
      <p>${i}</p></article>`).join(``)};o.addEventListener(`change`,()=>{a=o.value,i.set(`name`,a===`Bright Typer`?`bright`:`right`),history.replaceState(null,``,`${location.pathname}?${i}`),s()}),s()}i();