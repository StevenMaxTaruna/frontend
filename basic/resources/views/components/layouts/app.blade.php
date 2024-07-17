<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .kotak{
            margin: a uto;
            text-align: center;
            width: 500px;
            height: 200px;
            border: 8px solid rgb(31, 4, 4);
            color: rgb(230, 221, 235);
            font-size: 70px;
        }
        .red{
            background: red;
        }
        .yellow{
            background: yellow;
        }
        .blue{
            background: blue;
        }
    </style>
    @livewireStyles
</head>
<body>
    {{-- @livewire('header') --}}
    <br>
    @livewire('kotak1')
    <br>
    @livewire('main')
    <br>
    @livewire('kotak2')
    <br>
    {{$slot}}
    @livewireScripts
</body>
</html>