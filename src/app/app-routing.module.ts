import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
        path: "",
        loadChildren: "./modules/setup/setup.module#SetupModule"
    },
    {
        path: "dashboard",
        loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
