@echo off
setlocal EnableDelayedExpansion
set counter=1


echo "请选择要执行的脚本命令："


for /f "tokens=*" %%a in ('node -p "Object.keys(require('./package.json').scripts).join('\n')"') do (
  set "option[!counter!]=%%a"
  echo !counter!. %%a
  set /a counter+=1
)


set /p choice="请输入选择的序号："

 
echo Running script: !option[%choice%]!


npm run !option[%choice%]! 2>error.log || (
  echo "发生错误。 检查 error.log 了解详细信息。"
  pause
)