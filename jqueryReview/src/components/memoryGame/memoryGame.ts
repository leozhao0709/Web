(function() {
  const shuffle = (arr: number[][]) => {
    if (!arr || arr.length === 0) {
      return;
    }

    const row = arr.length;
    const column = arr[0].length;

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        const candidateIndex = Math.floor(Math.random() * row * column);
        const candidateRow = Math.floor(candidateIndex / row);
        const candidateColumn = candidateIndex % column;

        [arr[i][j], arr[candidateRow][candidateColumn]] = [arr[candidateRow][candidateColumn], arr[i][j]];
      }
    }
  };

  const loadGameArray = (row: number, column: number): number[][] => {
    const arr: number[][] = Array(row)
      .fill(0)
      .map(_ => Array(column).fill(0));

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        arr[i][j] = Math.ceil((i * column + j + 1) / 2);
      }
    }

    shuffle(arr);
    return arr;
  };

  const loadGameUI = (arr: number[][]) => {
    if (!arr || arr.length === 0) {
      return;
    }

    const row = arr.length;
    const column = arr[0].length;

    let move = 0;
    const headerSection = $('#memoryGame .header');
    const moveSection = headerSection.find('.move');
    moveSection.text(`Moves: ${move}`);

    headerSection.off('click').on('click', '.btn.cheat', () => {
      // tslint:disable-next-line: no-console
      console.log(arr);
      $('#memoryGame main .card').each(function(_, element) {
        if (
          $(element)
            .find('.content')
            .get(0)
        ) {
          return;
        }
        const contentElem = $(`<div class="content">${arr[$(element).data('row')][$(element).data('column')]}</div>`);
        contentElem
          .appendTo($(this))
          .hide()
          .fadeIn(250, function() {
            $(this).fadeOut(250, () => {
              $(this)
                .parent()
                .empty();
            });
          });
      });
    });

    const mainSection = $('#memoryGame main');
    mainSection.html('');
    for (let i = 0; i < row; i++) {
      const rowSection = $(`<div class="row"></div>`);
      for (let j = 0; j < column; j++) {
        $(`<div class="card" data-row=${i} data-column=${j}>
        </div>`).appendTo(rowSection);
      }
      rowSection.appendTo(mainSection);
    }

    let lastClickCard: JQuery | null = null;
    mainSection.off('click').on('click', '.row > .card', function() {
      if (
        $(this)
          .find('.content')
          .get(0)
      ) {
        return;
      }

      moveSection.text(`Moves: ${++move}`);
      const clickRow = $(this).data('row');
      const clickColumn = $(this).data('column');

      const contentElem = $(`<div class="content">${arr[clickRow][clickColumn]}</div>`);
      contentElem
        .appendTo($(this))
        .hide()
        .fadeIn(1000, () => {
          if (lastClickCard === null) {
            lastClickCard = $(this);
            return;
          }

          const lastClickRow = lastClickCard.data('row');
          const lastClickColumn = lastClickCard.data('column');

          if (arr[clickRow][clickColumn] !== arr[lastClickRow][lastClickColumn]) {
            // if not match hide current with last
            lastClickCard.find('.content').fadeOut(500, function() {
              $(this).remove('.content');
            });
            $(this)
              .find('.content')
              .fadeOut(500, function() {
                $(this).remove('.content');
              });
          } else {
            // if match, then check if game over
            if (mainSection.find('.content').length === row * column) {
              alert('You win!!!');
            }
          }

          lastClickCard = null;
        });
    });
  };

  const loadGame = (row: number, column: number) => {
    const gameArr = loadGameArray(row, column);
    loadGameUI(gameArr);
  };

  $(document).ready(() => {
    let row = 4;
    let column = 4;
    loadGame(row, column);

    $('.select.difficulty').on('change', function() {
      switch (parseInt($(this).val() as string, 10)) {
        case 1:
          row = 6;
          column = 4;
          break;
        default:
          row = 4;
          column = 4;
          break;
      }
      loadGame(row, column);
    });

    $('.btn.reset').on('click', () => loadGame(row, column));
  });
})();
