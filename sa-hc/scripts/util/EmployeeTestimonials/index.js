import employeeArray from '../data/employeeInfo';

const IMAGE_URL = '/wp-content/themes/sahc-culture/resources/assets/images';

export default function() {
  // Get array of Employee Rows
  const rows = Array.from(document.getElementById('section-2')
      .getElementsByClassName('row'));

  rows.forEach((row, rowIndex) => {
    // Loop through columns and set background color and employee information
    Array.from(row.getElementsByClassName('col-4'))
      .forEach((col, colIndex) => {
        const employee = employeeArray[rowIndex][colIndex];

        // Set employee column HTML
        setEmployeeContainerHTML(col, employee)

        // Click Listener for employee column click
        addClickListener(
          col,
          row,
          rows,
          employee
        );
      })
  })
}

/**
 * Click event for Employee Column to load testimonial
 * @param col
 * @param row
 * @param rows
 * @param employee
 */
function addClickListener(
  col,
  row,
  rows,
  employee
) {
  const overlay = col.querySelector('.overlay');
  col.addEventListener('click', () => {
    if(overlay.style.display === '') {
      rows.forEach(column => column.querySelector('.overlay').style.display = '');
      resetTestimonials();
      overlay.style.display = 'none';
      row.querySelector('.testimonial-container').firstChild.style.backgroundColor = employee.color.bColor
      row.querySelector('.testimonial-container').firstChild.style.display = 'flex'
      setTestimonialContainerHTML(row, employee);
      col.firstChild.style.backgroundColor = pSBC(0.1, employee.color.bColor);
      col.firstChild.setAttribute('selected', true)
    }
    else{
      overlay.style.display = '';
      resetTestimonials();
      col.firstChild.removeAttribute('selected')
    }
  });
}

/**
 * Function to remove testimonial container
 */
function resetTestimonials() {
  Array.from(
      document
        .getElementById('section-2')
        .getElementsByClassName('row'))
        .forEach(row => {
          row.querySelector('.testimonial-container').firstChild.style.display = '';
        });
  Array.from(document
      .getElementById('section-2')
      .getElementsByClassName('col-4'))
    .forEach(col => col.querySelector('.overlay').style.display = '');
}

/**
 * Set the inner HTML for the employee column container
 * @param col
 * @param employee
 */
function setEmployeeContainerHTML(col, employee) {
  col.firstChild.innerHTML += `
          <img
          src="${IMAGE_URL}/employees/${employee.imgSrc}"
          alt="${employee.nameAndTitle}">
        `;
  col.firstChild.style.backgroundColor = employee.color.bColor;
  col.addEventListener('mouseover', () => {
    col.firstChild.style.backgroundColor = pSBC(0.1, employee.color.bColor);
  })
  col.addEventListener('mouseout', () => {
    if(!col.firstChild.getAttribute('selected'))
      col.firstChild.style.backgroundColor = employee.color.bColor;
  })
}

/**
 * Set the inner HTML for the testimonial container
 * @param row
 * @param employee
 */
function setTestimonialContainerHTML(row, employee) {
  row.querySelector('.testimonial-container').firstChild.innerHTML = `
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <img class="starburst" src="${IMAGE_URL}/${employee.color.starburst}" alt="Starburst Graphic" />
        <p class="employee-quote" style="color: ${employee.color.fColor}">${employee.quote}"</p>
        <p class="employee-nameTitle" style="color: ${employee.color.fColor}">${employee.nameAndTitle}</p>
      `
  row.querySelector('.close').addEventListener('click', resetTestimonials);
}

const pSBC=(p,c0,c1,l)=>{
  let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=='string';
  if(typeof(p)!='number'||p<-1||p>1||typeof(c0)!='string'||(c0[0]!=='r'&&c0[0]!=='#')||(c1&&!a))return null;
  if(!this.pSBCr)this.pSBCr=(d)=>{
    let n=d.length,x={};
    if(n>9){
      [r,g,b,a]=d=d.split(','),n=d.length;
      if(n<3||n>4)return null;
      x.r=i(r[3]==='a'?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
    }else{
      if(n===8||n===6||n<4)return null;
      if(n<6)d='#'+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:'');
      d=i(d.slice(1),16);
      if(n===9||n===5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
      else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
    }return x};
  h=c0.length>9,h=a?c1.length>9?true:c1==='c'?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!=='c'?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
  if(!f||!t)return null;
  if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
  else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
  a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
  if(h)return'rgb'+(f?'a(':'(')+r+','+g+','+b+(f?','+m(a*1000)/1000:'')+')';
  else return'#'+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}
