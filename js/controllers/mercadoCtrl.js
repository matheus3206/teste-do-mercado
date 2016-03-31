angular.module("mercado").controller("mercadoCtrl", function($scope){
	$scope.app = "Mercado";
	if (JSON.parse(localStorage.getItem('myStorage')) == null){
		$scope.mercadorias = [
			{codigo: 1, tipom: "Alimento", nome: "Arroz", qtd: 2, preco: "10", negocios: "Compra"},
			{codigo: 2, tipom: "Eletrodoméstico", nome: "Aspirador", qtd: 1, preco: "150", negocios: "Venda"},
			{codigo: 3, tipom: "Roupa", nome: "Camiseta", qtd: 3, preco: "50", negocios: "Compra"}
		];
	}else{
		$scope.mercadorias = JSON.parse(localStorage.getItem('myStorage'));
	}



	$scope.adicionarProduto = function(mercadoria) {
		$scope.mercadorias.push(angular.copy(mercadoria));
		delete $scope.mercadoria;
		localStorage.clear();
		localStorage.setItem('myStorage', JSON.stringify($scope.mercadorias));
		$scope.formMercadoria.$setPristine();
		};
	$scope.isCompra = function(){
		if ($scope.compra == 1)
			return true;
		else
			return false;
	};
	$scope.setCompra = function(){
		$scope.compra = 1;
		$scope.venda = 0;	
	};
	$scope.setVenda = function(){
		$scope.venda = 1;
		$scope.compra = 0;	
	};	
	$scope.getNegocio = function(mercadoria){
		console.log($scope.mercadoria);
		//if ($scope.mercadoria.negocios == "Compra")
		//	return true;
		//else
		//	return false;
	}		
});
