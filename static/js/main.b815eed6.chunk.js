(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATCSURBVEiJrVZdTFNnGH6+84O0pzs9PbRUWs3sLAiOiWZMHIgDNYv7cW564ebEH3QzMSzLpvHCZNvFNDExRhclGr1ArXG6XWEyQL1YIspSEetMVCiBkumwVC2tpz1ie875dgOMBjV12Um+q/O87/N+z/Pm/V5QSpHtsdlszRzH1b5MDIcsP0KI1WwyvSuKYg6A37ONY7IFsiz7/tIlSwwtnS4nhJj+FwJCyHRZlvfaZLkXwKmpU51mjuftoijG8p3OiNls3ksIcWdFYLfb11mt1u8IIVMAgOO4OlmWb1RWVm6vq6vzMgzDLKyqwhulpch3OnNWr17tqKmt3Wa1Wv+UZblhtKCpsiwfycnJeXO8SEopAEAQhC08zx8EEEmn0w+9Xu/smtpanmVZDEej8Pl8mDu3DMPDMUSjUWysrwcApFIpnG9rG7l79+5fFkGwK4oiptLpOZTSOxk3UFX1GKW0f/u337glSSoLBoN8X18fAEC0WlFRUYFQaAAMy6J28eJxCa76/RgYGMidXVJSuPKTjyXBYjk7lhzAv11EKTUIIT/t27+/8UhjI7l8pQONhw8jPz8fkiShYsECJBIJzCkrg8PhAAB0d3cjEAhgz+5deEUUydaGrwjHcb9M9CCjTd1u95fxeJycPnMWl9rb4fV6IUnScw2cNWsW/ujowAnfKaiqCrvdDkVR9gE4N8lkQgiv6XrxylWr8FtLCwoKCvDh8uXPTT4ag/UbNuB+OIzw0BDeqakBIeRVQsjMccyYyYSQD8rLy5urFy1iDcMAw2R2cDAYxI1AAIIgoLKqCjabbfwfpRSGYSAajeJaZydCodDWkZGRwwDAybK8kxrGZp7nZQqwN2/enFSpruv4+949NDU1ob+/HwcOHIB72rRJuGQiMTYi9thsth0syx5jWJZlCSEMpdSE0dtMkgKAYRgvlGusEBACwzByQSmTIRHP8zsXVlfvnjdvHjRNA8dljqlgMIjrXV0QRRFvV1ZmSAQAmqYhHA6jt7cXwZ6e75PJ5I/ABJM1Tbs2EAoZDx48QOOhQ2htbc1IUFRUBIfDgbfmz89IbhgGfD4fjh09CsMwcH9w8KmqquPDcKKTlyKRyNNzzc14b9kyRMJhtLa0vFASSimONzWhwOmE2+XCVb8f8XhcB9A5iYBSOqLreothGKj7fA3WrPkMPT09UBTluQR3bt9GMpnEurVrsWP7NgwODoLjuOOU0qdjmIltylhFsXfzpvrXTv98BrF4HEuWLkVhYSF0XUdnZyd6uruRl5eH10tL4fF4AACX29sRCARQUlyMkpJio+38hV/j8finkwgEQdjCcdxBSulDTdPkj1asmOJyuQAAsVgMJ0+cGB12w3j0KIr6TZugKAoeP36MoaEhdFy5khIEIaGqqphKpeZSSm9lSDSF4zhD03YpiuJ58uSJ+8LFi31+v5/qug5JksAwDL5uaMD0adORZ7cjEokgFovh9q1b6vWurmvpdLogFovNNpvNZwCYM4x61gHACIKwx2KxhD0eT9JkMtGNG9ZTmyTRmV5v2uVyRQSLZTA3N/eHMSWemSebhxtAEcMwJxdVVydMJlOSZdkvAMzIKjbb7QCA1WQyqXl5ctvLbBVZA//r2vIPl1QMGleEKl0AAAAASUVORK5CYII="},function(e,t,i){e.exports=i(18)},,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),r=i(9),a=i.n(r),o=(i(16),i(1)),l=i(2),c=i(5),u=i(4),d=i(6),h=(i(17),i(7)),m=i.n(h),p=i(3),A=function(){function e(){Object(o.a)(this,e),this.mineMatrix=[[0,"*",0,0,0,"*",0,0,0,"*"],[0,0,0,0,0,0,0,0,0,0],[0,"*",0,0,0,"*","*","*",0,0],[0,0,0,0,0,0,0,"*",0,0],[0,0,0,0,"*",0,0,0,0,0],[0,0,0,0,0,0,0,0,0,"*"],[0,0,0,0,"*",0,0,0,0,0],[0,0,"*",0,0,0,0,"*",0,0],[0,0,0,0,0,0,0,0,0,0],[0,"*",0,0,"*",0,0,0,0,0]]}return Object(l.a)(e,[{key:"getMatrixWithMineNumbers",value:function(){var e=this;return this.mineMatrix=this.mineMatrix.map((function(t,i){return t.map((function(n,s){return"*"===n?n:e.countMinesAround(n,s,t,i)}))})),this.mineMatrix}},{key:"getCellsWithoutMineNumber",value:function(){return this.mineMatrix.map((function(e){return e.filter((function(e){return"*"!==e})).length})).reduce((function(e,t){return e+t}))}},{key:"countMinesAround",value:function(e,t,i,n){var s=i.length-1,r=e;return n>0&&(r=this.countRowMines(r,t,s,n-1)),r=this.countRowMines(r,t,s,n),n<this.mineMatrix.length-1&&(r=this.countRowMines(r,t,s,n+1)),r}},{key:"countRowMines",value:function(e,t,i,n){var s=e;return t>0&&this.isBomb(n,t-1)&&s++,this.isBomb(n,t)&&s++,t<i&&this.isBomb(n,t+1)&&s++,s}},{key:"isBomb",value:function(e,t){return"*"===this.mineMatrix[e][t]}}]),e}(),b=i(10),v=i.n(b),x=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isOpened:i.props.isOpened,isExploded:!1},i.index=i.props.cellIndex,i.rowIndex=i.props.rowIndex,i.emitter=i.props.emitter,i.mineField=new A,i.mineFieldMatrix=i.mineField.getMatrixWithMineNumbers(),i.handleBombExplosion=i.handleBombExplosion.bind(Object(p.a)(i)),i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderCell",value:function(e){var t=e||"",i=this.getNumberColorClass(t);return"*"===e&&(t=s.a.createElement("img",{className:"mine",src:v.a,alt:"*"})),s.a.createElement("div",{className:i},t)}},{key:"getNumberColorClass",value:function(e){var t;switch(e){case 1:t="one";break;case 2:t="two";break;case 3:t="three";break;case 4:t="four";break;case 5:t="five";break;case 6:t="six";break;case 7:t="seven";break;case 8:t="eight";break;default:t=""}return t}},{key:"openCell",value:function(){var e="*"===this.mineFieldMatrix[this.rowIndex][this.index];this.setState({isOpened:!0}),e?(this.setState({isExploded:!0}),this.handleBombExplosion(this.index,this.rowIndex),this.emitter.emit("gameResult",!1)):this.emitter.emit("cellsOpened",1)}},{key:"handleBombExplosion",value:function(e,t){this.props.onBombExplosion(e,t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"cell ".concat(this.state.isExploded?" exploded-mine":"")},this.state.isOpened?this.renderCell(this.mineFieldMatrix[this.rowIndex][this.index]):s.a.createElement("button",{className:"button",onClick:function(){return e.openCell()}}))}}]),t}(s.a.Component),f=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).mineFieldMatrix=(new A).getMatrixWithMineNumbers(),i.handleExplodedCell=i.handleExplodedCell.bind(Object(p.a)(i)),i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderRow",value:function(e){var t=this,i=this.props.rowIndex,n=this.props.gameState,r=n.isFinished,a=n.isVictory;return e.map((function(e,n){var o="".concat(i,"-").concat(n),l="*"===t.mineFieldMatrix[i][n],c=r&&!a,u=t.exlodedCellIndex===n&&t.explodedRowIndex===i;return l&&!u&&c&&(o="".concat(i+t.mineFieldMatrix.length,"-").concat(n)),s.a.createElement(x,{emitter:t.props.emitter,onBombExplosion:t.handleExplodedCell,rowIndex:i,cellIndex:n,isOpened:l&&c,key:o})}))}},{key:"handleExplodedCell",value:function(e,t){this.exlodedCellIndex=e,this.explodedRowIndex=t}},{key:"render",value:function(){var e=this.props.row;return this.renderRow(e)}}]),t}(s.a.Component),M=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).emitter=i.props.emitter,i.openedCellsCounter=0,i.mineField=new A,i.noMineCells=i.mineField.getCellsWithoutMineNumber(),i.mineFieldMatrix=i.mineField.getMatrixWithMineNumbers(),i.cellsOpenedListener=i.cellsOpenedListener.bind(Object(p.a)(i)),i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.emitter.on("cellsOpened",this.cellsOpenedListener)}},{key:"componentWillUnmount",value:function(){this.emitter.removeListener("cellsOpened",this.cellsOpenedListener)}},{key:"cellsOpenedListener",value:function(e){this.openedCellsCounter+=e,this.openedCellsCounter===this.noMineCells&&this.emitter.emit("gameResult",!0)}},{key:"render",value:function(){var e=this,t=this.props.gameState,i=t.isFinished,n=t.isVictory,r=this.mineFieldMatrix.map((function(t,r){return s.a.createElement("div",{className:"row",key:r},s.a.createElement(f,{emitter:e.props.emitter,gameState:{isFinished:i,isVictory:n},row:t,rowIndex:r}))}));return s.a.createElement("div",{className:"grid ".concat(i?"unclickable":"")},r)}}]),t}(s.a.Component),O=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isStarted:!1,isFinished:!1,isVictory:!1},i.emitter=new m.a,i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.emitter.on("gameResult",(function(t){e.setState({isFinished:!0,isVictory:t})}))}},{key:"startGame",value:function(){this.setState({isStarted:!0})}},{key:"resetGame",value:function(){var e=this;this.setState({isStarted:!this.state.isStarted,isFinished:!1},(function(){e.setState({isStarted:!e.state.isStarted})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Minesweeper"),s.a.createElement("button",{className:"game-button",onClick:function(){return e.state.isStarted?e.resetGame():e.startGame()}},this.state.isStarted?"Reset":"Start"),s.a.createElement("p",{className:"finish-text ".concat(this.state.isVictory?"victory-text":"game-over-text"),hidden:!this.state.isFinished},this.state.isVictory?"Victory!":"Game Over :("),this.state.isStarted&&s.a.createElement(M,{emitter:this.emitter,gameState:this.state}))}}]),t}(s.a.Component);a.a.render(s.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b815eed6.chunk.js.map