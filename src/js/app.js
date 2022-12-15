import burger from './burger';
import slider from './slider';
import inputFile from './input-file';
import customSelect from 'custom-select';

burger();
customSelect('select');
slider();
inputFile();

Array.prototype.forEach.call(document.querySelectorAll('.example-wrapper'), function(wrapper){
  var buttons = wrapper.querySelectorAll('button');
  var removed = [];
  buttons[0].addEventListener('click', function(){
    removed = removed.concat(wrapper.querySelector('select').customSelect.empty());
  });
  buttons[1].addEventListener('click', function(){
    wrapper.querySelector('select').customSelect.append(removed);
    removed = [];
  });
  buttons[2].addEventListener('click', function(){
    wrapper.querySelector('select').customSelect.disabled = !wrapper.querySelector('select').customSelect.disabled
  });
});