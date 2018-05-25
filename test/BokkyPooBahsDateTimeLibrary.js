var dateTimeLibOutput={
  "contracts" : 
  {
    "BokkyPooBahsDateTimeLibrary.sol:BokkyPooBahsDateTimeLibrary" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_hours\",\"type\":\"uint256\"}],\"name\":\"subHours\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffMinutes\",\"outputs\":[{\"name\":\"_minutes\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDaysInMonth\",\"outputs\":[{\"name\":\"daysInMonth\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"}],\"name\":\"_daysFromDate\",\"outputs\":[{\"name\":\"_days\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"}],\"name\":\"timestampFromDate\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDayOfWeek\",\"outputs\":[{\"name\":\"dayOfWeek\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffHours\",\"outputs\":[{\"name\":\"_hours\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getHour\",\"outputs\":[{\"name\":\"hour\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"}],\"name\":\"_getDaysInMonth\",\"outputs\":[{\"name\":\"daysInMonth\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_months\",\"type\":\"uint256\"}],\"name\":\"addMonths\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"isWeekEnd\",\"outputs\":[{\"name\":\"weekEnd\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_years\",\"type\":\"uint256\"}],\"name\":\"addYears\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_years\",\"type\":\"uint256\"}],\"name\":\"subYears\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_hours\",\"type\":\"uint256\"}],\"name\":\"addHours\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"},{\"name\":\"hour\",\"type\":\"uint256\"},{\"name\":\"minute\",\"type\":\"uint256\"},{\"name\":\"second\",\"type\":\"uint256\"}],\"name\":\"timestampFromDateTime\",\"outputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffSeconds\",\"outputs\":[{\"name\":\"_seconds\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getDay\",\"outputs\":[{\"name\":\"day\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_days\",\"type\":\"uint256\"}],\"name\":\"addDays\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffMonths\",\"outputs\":[{\"name\":\"_months\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_minutes\",\"type\":\"uint256\"}],\"name\":\"addMinutes\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getSecond\",\"outputs\":[{\"name\":\"second\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_seconds\",\"type\":\"uint256\"}],\"name\":\"addSeconds\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_days\",\"type\":\"uint256\"}],\"name\":\"_daysToDate\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getYear\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_minutes\",\"type\":\"uint256\"}],\"name\":\"subMinutes\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getMonth\",\"outputs\":[{\"name\":\"month\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_months\",\"type\":\"uint256\"}],\"name\":\"subMonths\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"year\",\"type\":\"uint256\"}],\"name\":\"_isLeapYear\",\"outputs\":[{\"name\":\"leapYear\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"isLeapYear\",\"outputs\":[{\"name\":\"leapYear\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_days\",\"type\":\"uint256\"}],\"name\":\"subDays\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffDays\",\"outputs\":[{\"name\":\"_days\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"isWeekDay\",\"outputs\":[{\"name\":\"weekDay\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"timestampToDate\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"timestampToDateTime\",\"outputs\":[{\"name\":\"year\",\"type\":\"uint256\"},{\"name\":\"month\",\"type\":\"uint256\"},{\"name\":\"day\",\"type\":\"uint256\"},{\"name\":\"hour\",\"type\":\"uint256\"},{\"name\":\"minute\",\"type\":\"uint256\"},{\"name\":\"second\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"},{\"name\":\"_seconds\",\"type\":\"uint256\"}],\"name\":\"subSeconds\",\"outputs\":[{\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"getMinute\",\"outputs\":[{\"name\":\"minute\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"fromTimestamp\",\"type\":\"uint256\"},{\"name\":\"toTimestamp\",\"type\":\"uint256\"}],\"name\":\"diffYears\",\"outputs\":[{\"name\":\"_years\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"}]",
      "bin" : "610ac7610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600436106101e25763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166250155381146101e757806302e98e0d1461020757806310848ddf146102155780631e0582e9146102205780631f4f77b21461023157806322f8a2b8146102425780632af123b81461024d5780633e239e1a1461025b5780633f9e0eb7146102665780634355644d146102745780634371c46514610282578063442b8c79146102a1578063444fda82146102af5780634b321502146102bd5780635e05bd6d146102cb57806362fb9697146102e557806365c72840146102f35780637217523c146102fe5780637be341091461030c57806389a3a00d1461031a5780638aa001fc146103285780638d4a2d391461033357806390059aed1461034157806392d663131461036a5780639e524caa14610375578063a324ad2414610383578063ad203bd41461038e578063b05eb08d1461039c578063b8d16dbc146103a7578063c7b6fd6a146103b2578063c9d34622146103c0578063d6582d0d146103ce578063de5101af146103d9578063ea1c1690146103e4578063f615ed5414610422578063fa93f88314610430578063ff2258cb1461043b575b600080fd5b6101f5600435602435610449565b60408051918252519081900360200190f35b6101f5600435602435610463565b6101f5600435610480565b6101f56004356024356044356104ae565b6101f5600435602435604435610502565b6101f560043561051c565b6101f560043560243561052f565b6101f5600435610549565b6101f5600435602435610557565b6101f56004356024356105dd565b61028d600435610653565b604080519115158252519081900360200190f35b6101f5600435602435610668565b6101f560043560243561068e565b6101f56004356024356106e9565b6101f560043560243560443560643560843560a4356106fd565b6101f5600435602435610727565b6101f560043561073b565b6101f5600435602435610756565b6101f560043560243561076b565b6101f56004356024356107bf565b6101f56004356107d2565b6101f56004356024356107d9565b61034c6004356107e9565b60408051938452602084019290925282820152519081900360600190f35b6101f560043561087e565b6101f560043560243561089a565b6101f56004356108ad565b6101f56004356024356108c8565b61028d600435610949565b61028d60043561096e565b6101f5600435602435610990565b6101f56004356024356109a5565b61028d6004356109c0565b61034c6004356109d5565b6103ef6004356109f3565b604080519687526020870195909552858501939093526060850191909152608084015260a0830152519081900360c00190f35b6101f5600435602435610a34565b6101f5600435610a44565b6101f5600435602435610a53565b610e10810282038281111561045d57600080fd5b92915050565b60008183111561047257600080fd5b603c8383035b049392505050565b600080808061049462015180865b046107e9565b919450925090506104a58383610557565b95945050505050565b6225bad61960046064600c600d1986018190059687016113248101929092056003028390056112c09092016105b502929092059093016001199582029094039490940161016f029390930591909101030190565b6000620151806105138585856104ae565b02949350505050565b6007620151809091046003010660010190565b60008183111561053e57600080fd5b610e10838303610478565b610e10620151809091060490565b600081600114806105685750816003145b806105735750816005145b8061057e5750816007145b806105895750816008145b80610594575081600a145b8061059f575081600c145b156105ac5750601f61045d565b600282146105bc5750601e61045d565b6105c583610949565b6105d057601c6105d3565b601d5b60ff169392505050565b6000808080806105f0620151808861048e565b600c918901600019018281049390930196509106600101935091506106158484610557565b905080821115610623578091505b620151808706620151806106388686866104ae565b020194508685101561064957600080fd5b5050505092915050565b600060066106608361051c565b101592915050565b60008080808061067b620151808861048e565b9188019550935091506106158484610557565b6000808080806106a1620151808861048e565b918890039550935091506106b58484610557565b9050808211156106c3578091505b620151808706620151806106d88686866104ae565b020194508685111561064957600080fd5b610e10810282018281101561045d57600080fd5b600081603c8402610e108602620151806107188b8b8b6104ae565b02010101979650505050505050565b60008183111561073657600080fd5b500390565b6000808061074c620151808561048e565b9695505050505050565b62015180810282018281101561045d57600080fd5b60008080808080808789111561078057600080fd5b61078d620151808a61048e565b919750955093506107a1620151808961048e565b50600c97880297909102019590950393909303979650505050505050565b603c810282018281101561045d57600080fd5b603c900690565b8181018281101561045d57600080fd5b60008080836226496581018280808062023ab1600486020593506004600362023ab1860201059094039362164b09610fa0600187010205925060046105b58402058503601f01945061098f8560500281151561084157fe5b059150605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b6000808061088f620151808561048e565b509095945050505050565b603c810282038281111561045d57600080fd5b600080806108be620151808561048e565b5095945050505050565b600080808080806108dc620151808961048e565b91965094509250600c808602850188900360001901925082049450600c8206600101935061090a8585610557565b905080831115610918578092505b6201518088066201518061092d8787876104ae565b020195508786111561093e57600080fd5b505050505092915050565b60006004820615801561095e57506064820615155b8061045d57505061019090061590565b6000808080610980620151808661048e565b919450925090506104a583610949565b62015180810282038281111561045d57600080fd5b6000818311156109b457600080fd5b62015180838303610478565b600060056109cd8361051c565b111592915050565b600080806109e6620151808561048e565b9196909550909350915050565b6000808080808080610a08620151808961048e565b919a9099919850610e10620151809092068281049850603c929006828104975091909106945092505050565b8082038281111561045d57600080fd5b6000610e108206603c81610478565b600080808080808087891115610a6857600080fd5b610a75620151808a61048e565b91975095509350610a89620151808961048e565b505095909503989750505050505050505600a165627a7a72305820290427543f68caf0d50b881c916c41a35299ece11ef435a12528c027419a4db80029"
    }
  },
  "version" : "0.4.24+commit.e67f0147.Darwin.appleclang"
};
