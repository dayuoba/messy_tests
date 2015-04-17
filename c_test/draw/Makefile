cflags = -std=c99

draw:draw.c drawLine.o drawRect.o
	gcc draw.c drawLine.o drawRect.o -o draw $(cflags)
drawLine.o: drawLine.c
	gcc -c drawLine.c -o drawLine.o $(cflags)
drawRect.o: drawRect.c
	gcc -c drawRect.c -o drawRect.o $(cflags)

.PHONY:clean
clean:
	rm ./*.o draw
