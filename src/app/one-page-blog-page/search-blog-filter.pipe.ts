import { Pipe, PipeTransform } from '@angular/core';
import { BlogCard } from '../onepage-main/BlogCard';

// NOT: pipeline import ederken: one-page-blog-page.compontent.ts (SearchBlogFilterPipe) bu isimle eklenir
// NOT: pipeline ngFor içinde çağırırken ederken: one-page-blog-page.compontent.html (searchBlogFilter) bu isimle eklenir
@Pipe({
  // Pipe Adı
  name: 'searchBlogFilter',

  // Bu component bağımsız kullanabilelim.
  standalone: true,
})

// EXPORT
export class SearchBlogFilterPipe implements PipeTransform {
  // Transform: Manipulation
  // transform(value,parametresi)
  transform(value: BlogCard[], dataFilterBlogCategory?: any): BlogCard[] {
    // Ternary Condition
    // eğer dataFilterBlogCategory parametrede veri varsa küçük harfler olsun yoksa null olsun
    dataFilterBlogCategory = dataFilterBlogCategory
      ? dataFilterBlogCategory.toLocaleLowerCase()
      : null;

    // eğer dataFilterBlogCategory parametrede veri varsa bir takım filterlemeler yap
    // indexOf: Aramada varsa gösterir yoksa -1 döner
    return dataFilterBlogCategory
      ? value.filter(
          (category: BlogCard) =>
            category.categoryName
              .toLocaleLowerCase()
              .indexOf(dataFilterBlogCategory) !== -1
        )
      : value;
  } //end transform
} //end class SearchBlogFilterPipe
