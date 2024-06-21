//terminate if <200 in either 2 boxes]

f('S13').values()[0] < 200 || (f('S13').any('2') && f('S13').values()[1] < 200)