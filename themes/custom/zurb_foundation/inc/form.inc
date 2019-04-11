<?php

/**
 * Implements hook_form_alter().
 * @param $form
 * @param $form_state
 * @param $form_id
 */
function zurb_foundation_form_alter(&$form, &$form_state, $form_id) {
  // Sexy submit buttons
  if (!empty($form['actions']) && !empty($form['actions']['submit'])) {
    $form['actions']['submit']['#attributes']['class'][] = 'success';
    $form['actions']['submit']['#attributes']['class'][] = 'button';
    $form['actions']['submit']['#attributes']['class'][] = 'radius';
  }
  add_placeholders($form);
}

/**
 * Add placeholders to suitable form elements -> textfield, password, email, textarea
 */
function add_placeholders(&$element) {
  if(isset($element['#type']) && in_array($element['#type'], ['textfield', 'password', 'email', 'textarea'])) {
    $element['#attributes']['placeholder'] = $element['#title'].'...';
  }
  foreach(\Drupal\Core\Render\Element::children($element) as $key) {
    add_placeholders($element[$key]);
  }
}
