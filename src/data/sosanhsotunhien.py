def so_sanh_hai_so_tu_nhien(a,b):

  if len(a)>len(b):
    return f"{a} lớn hơn {b}"
  elif len(a)<len(b):
    return f"{b} lớn hơn {a}"
  else:
    for da,db in zip(a,b):
      if ord(da)>ord(db):
        return f"{a} lớn hơn {b}"
      elif ord(db)>ord(da):
        return f"{b} lớn hơn {a}"
  return f"{a} bằng {b}"
print (so_sanh_hai_so_tu_nhien("123","456"))
print (so_sanh_hai_so_tu_nhien("1234","456"))
print (so_sanh_hai_so_tu_nhien("135946","139457")) 
