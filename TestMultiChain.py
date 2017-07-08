import sys

# import fileinput

print "helloworld"
a = "  "
while(len(a)):
	a = sys.stdin.readline()
	# print len(a)
	print "echo|" + a+"|"
# print "echo|" + sys.stdin.readline()+"|"

# for line in sys.stdin: #.readline():
# 	print "echo "+line