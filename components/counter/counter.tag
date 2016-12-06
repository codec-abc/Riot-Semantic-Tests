<counter>
  <h3>click count { currentValue }</h3>
  <button class="ui button" onclick={ clickPlus }>+</button>
  <button class="ui button" onclick={ clickMinus }>-</button>
  <script>
    counter.call(this, this.opts);
  </script>
</counter>