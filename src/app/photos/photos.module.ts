import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    imports: [ 
        PhotoListModule,
        PhotoFormModule,
        PhotoModule,
        PhotoDetailsModule 
    ]
})
export class PhotosModule {}