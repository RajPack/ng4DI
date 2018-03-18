    import { NgModule } from "@angular/core";
    import { RouterModule, Route } from "@angular/Router";
    import { HomeComponent } from "./home/home.component";
    import { CatalogComponent } from "./catalog/catalog.component";
    import { ContactUsComponent } from "./contact-us/contact-us.component";
    import { AboutComponent } from "./about/about.component";
    import { NotFoundComponent } from "./not-found/not-found.component";
    import { CatalogItemComponent } from "./catalog-item/catalog-item.component";

    const appRoute: Route[] = [
        {path:"", component: HomeComponent},
        {path:"catalog", component: CatalogComponent, children: [
            {path: ":id", component: CatalogItemComponent}
        ]},
        {path:"contactUs", component: ContactUsComponent},
        {path:"about", component: AboutComponent},
        {path: "**" , component: NotFoundComponent}
    ];
    
    @NgModule({
        declarations:[],
        imports: [
            RouterModule.forRoot(appRoute)  
        ],
        exports:[RouterModule]
    })
    export class AppRoutingModule {

    }