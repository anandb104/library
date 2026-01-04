let library=[];
let index=0;
const tbody=document.querySelector("tbody");
const body=document.querySelector("body");
const button=document.querySelector(".add-book");
function Book(title,author,noofpages,read,id){
    this.title=title;
    this.author=author;
    this.noofpages=noofpages;
    this.read=read;
    this.id=id;
}

function addBookToLibrary(book3){
    library.push(book3);
    console.log(index);
    console.log(library[0]);
}
function displayBook(){
    for(let book=index;book<=library.length-1;book++){
        const row = document.createElement("tr");
        const sno1=document.createElement("td");
        sno1.textContent=index+1;
        row.appendChild(sno1);
        const title1=document.createElement("td");
        title1.textContent=library[book].title;
        row.appendChild(title1);
        const author1=document.createElement("td");
        author1.textContent=library[book].author;
        row.appendChild(author1);
        const noofpages1=document.createElement("td");
        noofpages1.textContent=library[book].noofpages;
        row.appendChild(noofpages1);
        const read1_td=document.createElement("td");
        const read1=document.createElement("input");
        read1.type='checkbox';
        read1.checked=library[book].read;
        row.appendChild(read1_td);
        read1_td.appendChild(read1);
        if(read1.checked==false){
            row.style.backgroundColor="red";
        }
        if(read1.checked==true){
            row.style.backgroundColor="green";
        }
        tbody.appendChild(row);
        index++;
    }
}
button.addEventListener("click",buttonclick);
function buttonclick(){
    const dialog=document.createElement("dialog");
    const form=document.createElement("form");
    form.method = "dialog";
    const div_wrapper_read=document.createElement("div");
    div_wrapper_read.classList.add("class");
    const div_wrapper_title=document.createElement("div");
    div_wrapper_title.classList.add("class");
    const div_wrapper_author=document.createElement("div");
    div_wrapper_author.classList.add("class");
    const div_wrapper_noofpages=document.createElement("div");
    div_wrapper_noofpages.classList.add("class");
    const div_wrapper_submit=document.createElement("div");
    div_wrapper_submit.classList.add("class");
   dialog.style.height='35rem';
   dialog.style.width='35rem';
   dialog.style.display='flex';
   dialog.style.justifyContent='center';
   dialog.style.position = "fixed";
   dialog.style.top = "50%";
   dialog.style.left = "50%";
   dialog.style.transform = "translate(-50%, -50%)";
    const input_title=document.createElement("input");
    const label_title=document.createElement("label");
    input_title.type='text';
    input_title.id='title';
    label_title.htmlFor='title';
    label_title.textContent='Title:';
    const input_author=document.createElement("input");
    const label_author=document.createElement("label");
    input_author.type='text';
    input_author.id='author';
    label_author.htmlFor='author';
    label_author.textContent='Author:';
    const input_noofpages=document.createElement("input");
    const label_noofpages=document.createElement("label");
    input_noofpages.type='number';
    input_noofpages.id='noofpages';
    label_noofpages.htmlFor='noofpages';
    label_noofpages.textContent='Number of Pages:';
    const input_read=document.createElement("input");
    const label_read=document.createElement("label");
    input_read.type='checkbox';
    input_read.id='read';
    label_read.htmlFor='read';
    label_read.textContent='Read?';
    const submit=document.createElement("button");
    submit.type='submit';
    submit.textContent='Submit?';
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const book3=new Book(input_title.value,input_author.value,input_noofpages.value,input_read.checked);
        addBookToLibrary(book3);
        displayBook();
        dialog.close();
        dialog.remove()
      });
    const close=document.createElement("button");
    close.type = "button";
    close.textContent="x";
    close.classList.add('close');
    close.addEventListener("click", (e) => {
        e.stopPropagation();
        dialog.close();
        dialog.remove()
      });
    form.appendChild(div_wrapper_title);
    div_wrapper_title.appendChild(label_title);
    div_wrapper_title.appendChild(input_title);
    form.appendChild(div_wrapper_author);
    div_wrapper_author.appendChild(label_author);
    div_wrapper_author.appendChild(input_author);
    form.appendChild(div_wrapper_noofpages);
    div_wrapper_noofpages.appendChild(label_noofpages);
    div_wrapper_noofpages.appendChild(input_noofpages);
    form.appendChild(div_wrapper_read);
    div_wrapper_read.appendChild(label_read);
    div_wrapper_read.appendChild(input_read);
    form.appendChild(div_wrapper_submit);
    div_wrapper_submit.appendChild(submit);
    dialog.appendChild(close);
    body.appendChild(dialog);
    dialog.appendChild(form);
    dialog.showModal();
}

