## Day1

### 项目启动

工具： 
本来打算使用vscode.dev全程完成开发，但是实际使用中发现，dev只能进行coding，不能完成index.html的预览（缺少插件），所以就计算是上班时候，使用dev进行一些框架/开发规划，回家继续使用vscode完成开发和调试

今日规划：
一开始的时候，本想着先完成Math matrix相关的函数编写，但在实际的编写过程中发现了需要matrix实际上是有2/3/4维的区分，所以导致了编写时候的传参设置的困难，比如scale如何抽象。然后思考了这个流程，觉得应该是根据实际的应用场景，反过来逐渐完善工具类的使用。当然这里去参考了一些知名库的实现（https://github.com/toji/gl-matrix，https://github.com/mrdoob/three.js/blob/dev/src/math/Matrix4.js)。所以暂时将目标变成，完成Canvas点线面接口的实现，然后思考canvas和3d camera的结合，然后再实现camera MVP的过程中，逐渐完善matrix等基础组件库。

