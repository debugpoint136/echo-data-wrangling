export default /* GraphQL */ `
  mutation {
    subj9321282: CreateSubject(id: "9321282", sex: "M", age: 32, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosACC01MJL02: CreateBiosample(id: "ACC01MJL-02", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-03-17" }, elapsed_time: "7") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosacc01mjl02subj9321282: AddBiosampleSubject (from: { id: "ACC01MJL-02" }, to: { id: "9321282" }) {
    from {
      id
    }
  }
  
subj9534415: CreateSubject(id: "9534415", sex: "M", age: 33, race: "White") {
        id
	sex
	age
	race
      }
      
biosB090GGVW14: CreateBiosample(id: "B090GGVW-14", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-01-20" }, elapsed_time: "-343") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosb090ggvw14subj9534415: AddBiosampleSubject (from: { id: "B090GGVW-14" }, to: { id: "9534415" }) {
    from {
      id
    }
  }
  
subj9313920: CreateSubject(id: "9313920", sex: "M", age: 25, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosBCC0079G01: CreateBiosample(id: "BCC0079G-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2008-07-17" }, elapsed_time: "-344") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosbcc0079g01subj9313920: AddBiosampleSubject (from: { id: "BCC0079G-01" }, to: { id: "9313920" }) {
    from {
      id
    }
  }
  
subj9321553: CreateSubject(id: "9321553", sex: "M", age: 21, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosBCC00RJN03: CreateBiosample(id: "BCC00RJN-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-02-26" }, elapsed_time: "-161") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosbcc00rjn03subj9321553: AddBiosampleSubject (from: { id: "BCC00RJN-03" }, to: { id: "9321553" }) {
    from {
      id
    }
  }
  
subj9313454: CreateSubject(id: "9313454", sex: "M", age: 23, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosBCC01KYP02: CreateBiosample(id: "BCC01KYP-02", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-02-20" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosbcc01kyp02subj9313454: AddBiosampleSubject (from: { id: "BCC01KYP-02" }, to: { id: "9313454" }) {
    from {
      id
    }
  }
  
subj9313920: CreateSubject(id: "9313920", sex: "M", age: 25, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosBCC01N6601: CreateBiosample(id: "BCC01N66-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-03-25" }, elapsed_time: "272") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosbcc01n6601subj9313920: AddBiosampleSubject (from: { id: "BCC01N66-01" }, to: { id: "9313920" }) {
    from {
      id
    }
  }
  
subj9320666: CreateSubject(id: "9320666", sex: "M", age: 19, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosCCC00FTR01: CreateBiosample(id: "CCC00FTR-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2008-10-22" }, elapsed_time: "-364") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosccc00ftr01subj9320666: AddBiosampleSubject (from: { id: "CCC00FTR-01" }, to: { id: "9320666" }) {
    from {
      id
    }
  }
  
subj9320086: CreateSubject(id: "9320086", sex: "M", age: 22, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosCCC018X503: CreateBiosample(id: "CCC018X5-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-10-06" }, elapsed_time: "-114") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosccc018x503subj9320086: AddBiosampleSubject (from: { id: "CCC018X5-03" }, to: { id: "9320086" }) {
    from {
      id
    }
  }
  
subj9321282: CreateSubject(id: "9321282", sex: "M", age: 32, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosCCC0296P01: CreateBiosample(id: "CCC0296P-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-11-23" }, elapsed_time: "258") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosccc0296p01subj9321282: AddBiosampleSubject (from: { id: "CCC0296P-01" }, to: { id: "9321282" }) {
    from {
      id
    }
  }
  
subj9313454: CreateSubject(id: "9313454", sex: "M", age: 23, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosDCC023QQ01: CreateBiosample(id: "DCC023QQ-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-08-28" }, elapsed_time: "189") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosdcc023qq01subj9313454: AddBiosampleSubject (from: { id: "DCC023QQ-01" }, to: { id: "9313454" }) {
    from {
      id
    }
  }
  
subj9313664: CreateSubject(id: "9313664", sex: "M", age: 22, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosECC011FG01: CreateBiosample(id: "ECC011FG-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-06-18" }, elapsed_time: "-232") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosecc011fg01subj9313664: AddBiosampleSubject (from: { id: "ECC011FG-01" }, to: { id: "9313664" }) {
    from {
      id
    }
  }
  
subj9321891: CreateSubject(id: "9321891", sex: "M", age: 25, race: "Black/African American") {
        id
	sex
	age
	race
      }
      
biosECC018HM01: CreateBiosample(id: "ECC018HM-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-09-29" }, elapsed_time: "-240") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosecc018hm01subj9321891: AddBiosampleSubject (from: { id: "ECC018HM-01" }, to: { id: "9321891" }) {
    from {
      id
    }
  }
  
subj9320086: CreateSubject(id: "9320086", sex: "M", age: 22, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosECC01J9P03: CreateBiosample(id: "ECC01J9P-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-01-28" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosecc01j9p03subj9320086: AddBiosampleSubject (from: { id: "ECC01J9P-03" }, to: { id: "9320086" }) {
    from {
      id
    }
  }
  
subj9321891: CreateSubject(id: "9321891", sex: "M", age: 25, race: "Black/African American") {
        id
	sex
	age
	race
      }
      
biosECC01SPC01: CreateBiosample(id: "ECC01SPC-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-05-27" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosecc01spc01subj9321891: AddBiosampleSubject (from: { id: "ECC01SPC-01" }, to: { id: "9321891" }) {
    from {
      id
    }
  }
  
subj9320666: CreateSubject(id: "9320666", sex: "M", age: 19, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosECC01VJQ01: CreateBiosample(id: "ECC01VJQ-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-07-01" }, elapsed_time: "253") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosecc01vjq01subj9320666: AddBiosampleSubject (from: { id: "ECC01VJQ-01" }, to: { id: "9320666" }) {
    from {
      id
    }
  }
  
subj9320086: CreateSubject(id: "9320086", sex: "M", age: 22, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosECC0204J01: CreateBiosample(id: "ECC0204J-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-08-12" }, elapsed_time: "196") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosecc0204j01subj9320086: AddBiosampleSubject (from: { id: "ECC0204J-01" }, to: { id: "9320086" }) {
    from {
      id
    }
  }
  
subj9320965: CreateSubject(id: "9320965", sex: "M", age: 19, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosFCC00KVR01: CreateBiosample(id: "FCC00KVR-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2008-12-13" }, elapsed_time: "-333") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosfcc00kvr01subj9320965: AddBiosampleSubject (from: { id: "FCC00KVR-01" }, to: { id: "9320965" }) {
    from {
      id
    }
  }
  
subj9320965: CreateSubject(id: "9320965", sex: "M", age: 19, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosGCC01CBH02: CreateBiosample(id: "GCC01CBH-02", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-11-11" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosgcc01cbh02subj9320965: AddBiosampleSubject (from: { id: "GCC01CBH-02" }, to: { id: "9320965" }) {
    from {
      id
    }
  }
  
subj9321282: CreateSubject(id: "9321282", sex: "M", age: 32, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosGCC01GZ603: CreateBiosample(id: "GCC01GZ6-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-01-08" }, elapsed_time: "-61") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosgcc01gz603subj9321282: AddBiosampleSubject (from: { id: "GCC01GZ6-03" }, to: { id: "9321282" }) {
    from {
      id
    }
  }
  
subj9321553: CreateSubject(id: "9321553", sex: "M", age: 21, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosGCC01RB801: CreateBiosample(id: "GCC01RB8-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-05-06" }, elapsed_time: "273") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosgcc01rb801subj9321553: AddBiosampleSubject (from: { id: "GCC01RB8-01" }, to: { id: "9321553" }) {
    from {
      id
    }
  }
  
subj9321553: CreateSubject(id: "9321553", sex: "M", age: 21, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosHCC014T103: CreateBiosample(id: "HCC014T1-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-08-06" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  bioshcc014t103subj9321553: AddBiosampleSubject (from: { id: "HCC014T1-03" }, to: { id: "9321553" }) {
    from {
      id
    }
  }
  
subj9321891: CreateSubject(id: "9321891", sex: "M", age: 25, race: "Black/African American") {
        id
	sex
	age
	race
      }
      
biosHCC029WY01: CreateBiosample(id: "HCC029WY-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2011-02-16" }, elapsed_time: "265") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  bioshcc029wy01subj9321891: AddBiosampleSubject (from: { id: "HCC029WY-01" }, to: { id: "9321891" }) {
    from {
      id
    }
  }
  
subj9534415: CreateSubject(id: "9534415", sex: "M", age: 33, race: "White") {
        id
	sex
	age
	race
      }
      
biosJ090JVWF10: CreateBiosample(id: "J090JVWF-10", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-09-22" }, elapsed_time: "267") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosj090jvwf10subj9534415: AddBiosampleSubject (from: { id: "J090JVWF-10" }, to: { id: "9534415" }) {
    from {
      id
    }
  }
  
subj9320965: CreateSubject(id: "9320965", sex: "M", age: 19, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosJCC01QT201: CreateBiosample(id: "JCC01QT2-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-04-28" }, elapsed_time: "168") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosjcc01qt201subj9320965: AddBiosampleSubject (from: { id: "JCC01QT2-01" }, to: { id: "9320965" }) {
    from {
      id
    }
  }
  
subj9313664: CreateSubject(id: "9313664", sex: "M", age: 22, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosJCC028W601: CreateBiosample(id: "JCC028W6-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-10-28" }, elapsed_time: "265") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosjcc028w601subj9313664: AddBiosampleSubject (from: { id: "JCC028W6-01" }, to: { id: "9313664" }) {
    from {
      id
    }
  }
  
subj9534415: CreateSubject(id: "9534415", sex: "M", age: 33, race: "White") {
        id
	sex
	age
	race
      }
      
biosK090HP6513: CreateBiosample(id: "K090HP65-13", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-01-13" }, elapsed_time: "15") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  biosk090hp6513subj9534415: AddBiosampleSubject (from: { id: "K090HP65-13" }, to: { id: "9534415" }) {
    from {
      id
    }
  }
  
subj9313454: CreateSubject(id: "9313454", sex: "M", age: 23, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosKCC00XY501: CreateBiosample(id: "KCC00XY5-01", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-05-02" }, elapsed_time: "-294") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  bioskcc00xy501subj9313454: AddBiosampleSubject (from: { id: "KCC00XY5-01" }, to: { id: "9313454" }) {
    from {
      id
    }
  }
  
subj9313920: CreateSubject(id: "9313920", sex: "M", age: 25, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosKCC0122X03: CreateBiosample(id: "KCC0122X-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-06-26" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  bioskcc0122x03subj9313920: AddBiosampleSubject (from: { id: "KCC0122X-03" }, to: { id: "9313920" }) {
    from {
      id
    }
  }
  
subj9320666: CreateSubject(id: "9320666", sex: "M", age: 19, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosKCC019XJ03: CreateBiosample(id: "KCC019XJ-03", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2009-10-21" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  bioskcc019xj03subj9320666: AddBiosampleSubject (from: { id: "KCC019XJ-03" }, to: { id: "9320666" }) {
    from {
      id
    }
  }
  
subj9313664: CreateSubject(id: "9313664", sex: "M", age: 22, race: "Mixed/Other") {
        id
	sex
	age
	race
      }
      
biosKCC01K1902: CreateBiosample(id: "KCC01K19-02", type: "PBMC", kind: "Retrospective", category: "Derived", collected: { formatted: "2010-02-05" }, elapsed_time: "0") {
        id
	type
	kind
	category
	collected {
	  formatted
	}
	elapsed_time
      }
      
  bioskcc01k1902subj9313664: AddBiosampleSubject (from: { id: "KCC01K19-02" }, to: { id: "9313664" }) {
    from {
      id
    }
  }
  
sequDU1901S0004288: CreateSequenceItem(id: "DU19-01S0004288", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004288.tar.gz", md5sum: "cedbec07b4d2cc5d3d01d04d8976ef77", assay: "rna_seq", aliquot_id: "DU19-01S0004288") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004288biosgcc01rb801: AddSequenceItemBiosample (from: { id: "DU19-01S0004288" }, to: { id: "GCC01RB8-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004289: CreateSequenceItem(id: "DU19-01S0004289", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004289.tar.gz", md5sum: "19044872fe3a15779521c10f8168fc62", assay: "rna_seq", aliquot_id: "DU19-01S0004289") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004289biosb090ggvw14: AddSequenceItemBiosample (from: { id: "DU19-01S0004289" }, to: { id: "B090GGVW-14" }) {
    from {
      id
    }
  }
  
sequDU1901S0004290: CreateSequenceItem(id: "DU19-01S0004290", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004290.tar.gz", md5sum: "1d7b34202a07133cae26ae606d069cd7", assay: "rna_seq", aliquot_id: "DU19-01S0004290") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004290biosk090hp6513: AddSequenceItemBiosample (from: { id: "DU19-01S0004290" }, to: { id: "K090HP65-13" }) {
    from {
      id
    }
  }
  
sequDU1901S0004291: CreateSequenceItem(id: "DU19-01S0004291", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004291.tar.gz", md5sum: "b22e16996566d18f3b68c957be9d68b3", assay: "rna_seq", aliquot_id: "DU19-01S0004291") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004291biosj090jvwf10: AddSequenceItemBiosample (from: { id: "DU19-01S0004291" }, to: { id: "J090JVWF-10" }) {
    from {
      id
    }
  }
  
sequDU1901S0004292: CreateSequenceItem(id: "DU19-01S0004292", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004292.tar.gz", md5sum: "2cfd21119f29a9479caa935ad5a10796", assay: "rna_seq", aliquot_id: "DU19-01S0004292") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004292biosecc018hm01: AddSequenceItemBiosample (from: { id: "DU19-01S0004292" }, to: { id: "ECC018HM-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004293: CreateSequenceItem(id: "DU19-01S0004293", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004293.tar.gz", md5sum: "e50e05431a53506c04ba2b5061d94e30", assay: "rna_seq", aliquot_id: "DU19-01S0004293") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004293biosecc01spc01: AddSequenceItemBiosample (from: { id: "DU19-01S0004293" }, to: { id: "ECC01SPC-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004294: CreateSequenceItem(id: "DU19-01S0004294", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004294.tar.gz", md5sum: "ad1607b33e58d76c34b201e972c9078b", assay: "rna_seq", aliquot_id: "DU19-01S0004294") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004294bioshcc029wy01: AddSequenceItemBiosample (from: { id: "DU19-01S0004294" }, to: { id: "HCC029WY-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004295: CreateSequenceItem(id: "DU19-01S0004295", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004295.tar.gz", md5sum: "07161d377af502b6c6494078d9e1ec07", assay: "rna_seq", aliquot_id: "DU19-01S0004295") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004295biosbcc0079g01: AddSequenceItemBiosample (from: { id: "DU19-01S0004295" }, to: { id: "BCC0079G-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004296: CreateSequenceItem(id: "DU19-01S0004296", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004296.tar.gz", md5sum: "11fcc610c4101a787670f07d756696de", assay: "rna_seq", aliquot_id: "DU19-01S0004296") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004296biosfcc00kvr01: AddSequenceItemBiosample (from: { id: "DU19-01S0004296" }, to: { id: "FCC00KVR-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004297: CreateSequenceItem(id: "DU19-01S0004297", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004297.tar.gz", md5sum: "085d810731b4bf0d5f5bebaf310bd3ac", assay: "rna_seq", aliquot_id: "DU19-01S0004297") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004297biosgcc01cbh02: AddSequenceItemBiosample (from: { id: "DU19-01S0004297" }, to: { id: "GCC01CBH-02" }) {
    from {
      id
    }
  }
  
sequDU1901S0004298: CreateSequenceItem(id: "DU19-01S0004298", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004298.tar.gz", md5sum: "5b635cb4da83fbe882e9d21c798e95ef", assay: "rna_seq", aliquot_id: "DU19-01S0004298") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004298biosjcc01qt201: AddSequenceItemBiosample (from: { id: "DU19-01S0004298" }, to: { id: "JCC01QT2-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004299: CreateSequenceItem(id: "DU19-01S0004299", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004299.tar.gz", md5sum: "067e88436fd589515d313bb757b2afac", assay: "rna_seq", aliquot_id: "DU19-01S0004299") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004299biosgcc01gz603: AddSequenceItemBiosample (from: { id: "DU19-01S0004299" }, to: { id: "GCC01GZ6-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004300: CreateSequenceItem(id: "DU19-01S0004300", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004300.tar.gz", md5sum: "289bc6493316f9225e67bded637c523f", assay: "rna_seq", aliquot_id: "DU19-01S0004300") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004300biosacc01mjl02: AddSequenceItemBiosample (from: { id: "DU19-01S0004300" }, to: { id: "ACC01MJL-02" }) {
    from {
      id
    }
  }
  
sequDU1901S0004301: CreateSequenceItem(id: "DU19-01S0004301", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004301.tar.gz", md5sum: "9abb18e1ce9259a199c524957da1eabc", assay: "rna_seq", aliquot_id: "DU19-01S0004301") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004301biosccc0296p01: AddSequenceItemBiosample (from: { id: "DU19-01S0004301" }, to: { id: "CCC0296P-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004302: CreateSequenceItem(id: "DU19-01S0004302", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004302.tar.gz", md5sum: "0d799bb6b33276b9ed053c9900d8fe47", assay: "rna_seq", aliquot_id: "DU19-01S0004302") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004302biosbcc00rjn03: AddSequenceItemBiosample (from: { id: "DU19-01S0004302" }, to: { id: "BCC00RJN-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004303: CreateSequenceItem(id: "DU19-01S0004303", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004303.tar.gz", md5sum: "85653adcea323056bf19c90dce23d047", assay: "rna_seq", aliquot_id: "DU19-01S0004303") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004303bioshcc014t103: AddSequenceItemBiosample (from: { id: "DU19-01S0004303" }, to: { id: "HCC014T1-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004304: CreateSequenceItem(id: "DU19-01S0004304", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004304.tar.gz", md5sum: "b17cdf9522453640cc3ed4bcc492ee50", assay: "rna_seq", aliquot_id: "DU19-01S0004304") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004304bioskcc019xj03: AddSequenceItemBiosample (from: { id: "DU19-01S0004304" }, to: { id: "KCC019XJ-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004305: CreateSequenceItem(id: "DU19-01S0004305", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004305.tar.gz", md5sum: "3966e85074eba832556635e947b3d0c6", assay: "rna_seq", aliquot_id: "DU19-01S0004305") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004305biosecc01vjq01: AddSequenceItemBiosample (from: { id: "DU19-01S0004305" }, to: { id: "ECC01VJQ-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004306: CreateSequenceItem(id: "DU19-01S0004306", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004306.tar.gz", md5sum: "7296a579c6b07be53e7da006a20da004", assay: "rna_seq", aliquot_id: "DU19-01S0004306") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004306bioskcc0122x03: AddSequenceItemBiosample (from: { id: "DU19-01S0004306" }, to: { id: "KCC0122X-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004307: CreateSequenceItem(id: "DU19-01S0004307", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004307.tar.gz", md5sum: "2dee2533185d0fa4580aec7d8ba20808", assay: "rna_seq", aliquot_id: "DU19-01S0004307") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004307biosbcc01n6601: AddSequenceItemBiosample (from: { id: "DU19-01S0004307" }, to: { id: "BCC01N66-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004308: CreateSequenceItem(id: "DU19-01S0004308", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004308.tar.gz", md5sum: "5c06346960083e69ee4ca0d2cc8048a2", assay: "rna_seq", aliquot_id: "DU19-01S0004308") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004308biosdcc023qq01: AddSequenceItemBiosample (from: { id: "DU19-01S0004308" }, to: { id: "DCC023QQ-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004309: CreateSequenceItem(id: "DU19-01S0004309", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004309.tar.gz", md5sum: "366c0d0f8e6e355bca5f106f25546564", assay: "rna_seq", aliquot_id: "DU19-01S0004309") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004309biosecc011fg01: AddSequenceItemBiosample (from: { id: "DU19-01S0004309" }, to: { id: "ECC011FG-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004310: CreateSequenceItem(id: "DU19-01S0004310", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004310.tar.gz", md5sum: "834154a172f3ee1a9073c7b19ec09ff4", assay: "rna_seq", aliquot_id: "DU19-01S0004310") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004310bioskcc01k1902: AddSequenceItemBiosample (from: { id: "DU19-01S0004310" }, to: { id: "KCC01K19-02" }) {
    from {
      id
    }
  }
  
sequDU1901S0004311: CreateSequenceItem(id: "DU19-01S0004311", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004311.tar.gz", md5sum: "7f77f8b6a8995dda04e7761359ef4c67", assay: "rna_seq", aliquot_id: "DU19-01S0004311") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004311biosjcc028w601: AddSequenceItemBiosample (from: { id: "DU19-01S0004311" }, to: { id: "JCC028W6-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004312: CreateSequenceItem(id: "DU19-01S0004312", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004312.tar.gz", md5sum: "3505c19bd201b6e7e3a37a18ca39ae2a", assay: "rna_seq", aliquot_id: "DU19-01S0004312") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004312biosccc018x503: AddSequenceItemBiosample (from: { id: "DU19-01S0004312" }, to: { id: "CCC018X5-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004313: CreateSequenceItem(id: "DU19-01S0004313", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004313.tar.gz", md5sum: "05cb0bedb5f0318846b35e5e0fbf2669", assay: "rna_seq", aliquot_id: "DU19-01S0004313") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004313biosecc01j9p03: AddSequenceItemBiosample (from: { id: "DU19-01S0004313" }, to: { id: "ECC01J9P-03" }) {
    from {
      id
    }
  }
  
sequDU1901S0004314: CreateSequenceItem(id: "DU19-01S0004314", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004314.tar.gz", md5sum: "9cd5cf2c140d1a689579e1678861ace9", assay: "rna_seq", aliquot_id: "DU19-01S0004314") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004314biosecc0204j01: AddSequenceItemBiosample (from: { id: "DU19-01S0004314" }, to: { id: "ECC0204J-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004315: CreateSequenceItem(id: "DU19-01S0004315", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004315.tar.gz", md5sum: "655604ccec33b1d98b55073a7622659c", assay: "rna_seq", aliquot_id: "DU19-01S0004315") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004315biosccc00ftr01: AddSequenceItemBiosample (from: { id: "DU19-01S0004315" }, to: { id: "CCC00FTR-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004316: CreateSequenceItem(id: "DU19-01S0004316", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004316.tar.gz", md5sum: "1604a3c71541ce2616a37286d0fe5f69", assay: "rna_seq", aliquot_id: "DU19-01S0004316") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004316bioskcc00xy501: AddSequenceItemBiosample (from: { id: "DU19-01S0004316" }, to: { id: "KCC00XY5-01" }) {
    from {
      id
    }
  }
  
sequDU1901S0004317: CreateSequenceItem(id: "DU19-01S0004317", filename: "/home/gridsan/groups/ECHO_ACA/ACA/pub/HIV_total_RNA/DU19-01S0004317.tar.gz", md5sum: "172db37be134278fe8db5d51b40d5dc9", assay: "rna_seq", aliquot_id: "DU19-01S0004317") {
        id
	filename
	md5sum
	assay
	aliquot_id
      }
      
  sequdu1901s0004317biosbcc01kyp02: AddSequenceItemBiosample (from: { id: "DU19-01S0004317" }, to: { id: "BCC01KYP-02" }) {
    from {
      id
    }
  }
}`;
