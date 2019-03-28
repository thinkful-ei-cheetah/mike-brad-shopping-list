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

function attachEventListener() {
  $('#js-shopping-list-form').submit(addShoppingItem);
  console.log('load');
}

$(attachEventListener);

// $('.shopping-list').on('click', '.shopping-item-delete', deleteShoppingItem);
// $(this).closest('li').remove();