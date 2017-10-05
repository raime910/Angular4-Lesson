import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tasty Treat', 'The tastiest treat ever.', 'https://www.facebook.com/profile/pic.php?cuid=AYjYHCmzeynAaITPb_E1BmnUPiWQqy6vm1p_zXDTp5Wusm2RYSVw7Z7n3TyetV4SXJWbz6jYq1OsrtFSPnWU303asMK7qQB05KhMbguRgh7MtSSSEpj43QbYUOUCKvuYrZmvvkvAtm8WB76UZcEqD9JfqXdF_BQz3J5BqhL2G6ppxGmKSStCYLMkwDnEVBHNjnGUZTISEebT6h3-gh0GqLpcCLUodeezRIlkhWJUGv8q5nx4bShE2e5eQu6uF8juo5w&square_px=64'),
    new Recipe('Tasty Treat', 'The tastiest treat ever.', 'https://www.facebook.com/profile/pic.php?cuid=AYjYHCmzeynAaITPb_E1BmnUPiWQqy6vm1p_zXDTp5Wusm2RYSVw7Z7n3TyetV4SXJWbz6jYq1OsrtFSPnWU303asMK7qQB05KhMbguRgh7MtSSSEpj43QbYUOUCKvuYrZmvvkvAtm8WB76UZcEqD9JfqXdF_BQz3J5BqhL2G6ppxGmKSStCYLMkwDnEVBHNjnGUZTISEebT6h3-gh0GqLpcCLUodeezRIlkhWJUGv8q5nx4bShE2e5eQu6uF8juo5w&square_px=64')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
