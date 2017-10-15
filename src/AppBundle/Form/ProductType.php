<?php
/**
 * Created by PhpStorm.
 * User: HB
 * Date: 11/10/2017
 * Time: 10:01
 */

namespace AppBundle\Form;

use AppBundle\Entity\Product;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

// Pour le select
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

// Input type=file
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProductType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom', TextType::class)
            ->add('prix', TextType::class)
            ->add('saison', TextType::class)
            ->add('type', EntityType::class, array(
                // query choices from this entity
                'class' => 'AppBundle:Type',

                // use the User.username property as the visible option string
                'choice_label' => 'nom',


                // used to render a select box, check boxes or radios
                // 'multiple' => true,
                // 'expanded' => true,
            ))
            ->add('stock', TextType::class)
            ->add('image', FileType::class, array(
                'data_class'=>null,
                'required' => false));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Product::class,
        ));
    }

}