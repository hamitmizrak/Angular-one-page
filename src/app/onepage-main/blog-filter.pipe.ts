import { Pipe, PipeTransform } from '@angular/core';
import { BlogCard } from './BlogCard';

@Pipe({
  name: 'blogFilter',
  standalone: true
})
export class BlogFilterPipe implements PipeTransform {
  transform(value: BlogCard[], filterText?: any): BlogCard[] {
    filterText=filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:BlogCard)=>p.header
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
