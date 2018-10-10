import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    // trim() >> removes the blank spaces
    // toLowerCase() >> turns the letters into lower
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return (
        photos
          // filtering the photos where the description includes what the user is typing at the search input
          .filter(photo =>
            photo.description.toLowerCase().includes(descriptionQuery)
          )
      );
    } else {
      // if there's no photos with that contains the description like the user wants, we return the hole photos array
      return photos;
    }
  }
}
