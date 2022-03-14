import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/modelos/categoria';
import { CategoriaService } from 'src/app/services/categorias/categoria.service';

@Component({
  selector: 'app-fcategoria',
  templateUrl: './fcategoria.component.html',
  styleUrls: ['./fcategoria.component.css']
})
export class FcategoriaComponent implements OnInit {
  
  constructor(public categoriaService: CategoriaService) {
    
   }
  categoria: Categoria[] = [];
  ngOnInit() {
    return this.categoriaService.getdata().subscribe(item => {
        this.categoria = [];
        item.forEach(element => {
          let x = element;
          x["id_categoria"] = element.id_categoria;
          this.categoria.push(x as Categoria);
        });
      });
  }
  onCreate(categoria: Categoria){
    this.categoriaService.selectedCategoria = Object.assign({}, categoria);
  }
  onEdit(product: Categoria) {
    this.categoriaService.selectedCategoria = Object.assign({}, product);
  }

  onDelete(id_categoria:number) {
    if(confirm('Are you sure you want to delete it?')) {
      this.categoriaService.eliminartegoria(id_categoria);
      //this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }

  onSubmit(categoriaForm: NgForm)
  {
    try {
      //if(categoriaForm.value.id_categoria == null)
      this.categoriaService.insertcategoria(categoriaForm.value);
    //else
    //this.categoriaService.editcategoria(categoriaForm.value);
    console.log("jajajajjja")
    this.resetForm(categoriaForm);
    //this.toastr.success('Sucessful Operation', 'Product Registered');
    } catch (error) {
      console.log(error)
    }
  }
  resetForm(categoriaForm?: NgForm)
  {
    if(categoriaForm != null)
    categoriaForm.reset();
      this.categoriaService.selectedCategoria = new Categoria();
  }
}
