'use strict';
/* global $ */

// function to add new item to current shopping list
function addShoppingItem(event) {
  event.preventDefault();
  let item = $('#shopping-list-entry').val();
  // clears the last input in the input bar
  $('#shopping-list-entry').val('');
  let html = generateNewTemp(item);
  //adds new item to the bottom of current list
  $('.shopping-list').append(html);
}

//Generates new template with which ever 'word' was inputed from input bar
function generateNewTemp(name) {
  return `
  <li>
        <span class="shopping-item">${name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
  `;
}

// created check buttom that applies toggling of shopping item checked css function
function checkButton() {
  // upon interacting with the check button in the template,
  // it will trigger the checked function, this is integrated with CSS
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
}

//function to remove template / item from list.  Removes closest parent li item from ul
function deleteShoppingItem() {
  // upon interacting with the delete button in the template,
  // it will remove/ delete the entire template
  $(this).closest('li').remove();
}

// function to include event listener to entire application
function attachEventListener() {
  // .submit() is shorthand for .on('submit', handler), but cannot accept any arguments
  // note: can be written with .on 
  $('#js-shopping-list-form').submit(addShoppingItem);
  // note: cannot be written with .submit since it needs arguments
  $('.shopping-list').on('click', '.shopping-item-toggle', checkButton);
  $('.shopping-list').on('click', '.shopping-item-delete', deleteShoppingItem);
}

$(attachEventListener);