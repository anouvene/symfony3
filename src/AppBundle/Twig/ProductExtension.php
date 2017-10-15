<?php
namespace AppBundle\Twig;

use AppBundle\Services\ProductService;

class ProductExtension extends \Twig_Extension
{
    protected $service;

    public function __construct(ProductService $service)
    {
        $this->service = $service;
    }

    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('saison', array($this, 'getSaison')),
            new \Twig_SimpleFilter('stock', array($this, 'getStock')),
        );
    }

    public function getSaison($moisSemis)
    {
        return $this->service->afficherSaison($moisSemis);
    }

    public function getStock($stock)
    {
        return $this->service->afficherStock($stock);
    }
}