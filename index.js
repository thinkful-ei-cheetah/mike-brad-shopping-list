'use strict';
/* global $ */

function addShoppingItem(event) {
  event.preventDefault();
  let item = $('#shopping-list-entry').val();
  let html = generateNewTemp(item);
  $('.shopping-list').append(html);
  console.log(html);
}

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
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
}

function deleteShoppingItem() {
  $(this).closest('li').remove();
  console.log('delete me');
}

function attachEventListener() {
  $('#js-shopping-list-form').submit(addShoppingItem);
  $('.shopping-list').on('click', '.shopping-item-toggle', checkButton);
  $('.shopping-list').on('click', '.shopping-item-delete', deleteShoppingItem);
}

$(attachEventListener);
