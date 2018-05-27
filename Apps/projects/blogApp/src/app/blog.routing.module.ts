import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { BlogListComponent } from "./blogList/blogList.component";
import { NgModule } from "@angular/core";
import { BlogAddComponent } from './blogAdd/blogAdd.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailResolver } from './blog/blog.service';
import { BlogEditComponent } from './blogEdit/blogEdit.component';

const paths : Routes = [
    {path: "", redirectTo: "blogList" , pathMatch: 'full'},
    {path: "blogList", component: BlogListComponent, children: [
        {path: "blog/:id", component: BlogPageComponent, resolve: {blog: BlogDetailResolver} } ,
        {path: "editBlog/:id", component: BlogEditComponent,  resolve: {blog: BlogDetailResolver}}    
    ]},
    {path: "newBlog", component: BlogAddComponent}
]
@NgModule({
    providers: [],
    imports: [
        RouterModule.forRoot(paths)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule { 

}